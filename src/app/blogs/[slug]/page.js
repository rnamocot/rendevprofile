import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getRelatedPosts, getBlogCategory } from '../../lib/BlogdataList';
import SocialShare from '../components/SocialShare';
import AdSense from '../components/AdSense';
import Footer from '../../components/layout/Footer';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const category = getBlogCategory(post.category);

  return {
    title: `${post.title} | Renie Namocot Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', ') + ', web development, programming, tutorial',
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Renie Namocot',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://renienamocot.com/blogs/${post.slug}`,
      siteName: 'Renie Namocot Blog',
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified,
      authors: [post.author],
      section: category?.name || post.category,
      tags: post.tags,
      images: [
        {
          url: `https://renienamocot.com${post.image}` || 'https://renienamocot.com/social-share.PNG',
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/jpeg'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@renie',
      images: [`https://renienamocot.com${post.image}` || 'https://renienamocot.com/social-share.PNG']
    },
    alternates: {
      canonical: `/blogs/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id, post.category, 3);
  const category = getBlogCategory(post.category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://renienamocot.com${post.image}`,
    url: `https://renienamocot.com/blogs/${post.slug}`,
    datePublished: post.publishDate,
    dateModified: post.lastModified,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://renienamocot.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Renie Namocot',
      url: 'https://renienamocot.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://renienamocot.com/logo.PNG'
      }
    },
    articleSection: category?.name || post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.replace(/<[^>]*>/g, '').split(' ').length,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://renienamocot.com/blogs/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="pt-20 pb-4 bg-gray-50 border-b">
          <div className="container mx-auto px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blogs" className="hover:text-blue-600">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href={`/blogs/category/${post.category}`} className="hover:text-blue-600">{category?.name || post.category}</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 truncate">{post.title}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <header className="mb-8">
              <div className="mb-6">
                <Link 
                  href={`/blogs/category/${post.category}`}
                  className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  {category?.name || post.category}
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
                <div className="flex items-center">
                  <span className="font-medium">By {post.author}</span>
                </div>
                <span className="text-gray-400">•</span>
                <time dateTime={post.publishDate} className="font-medium">
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-gray-400">•</span>
                <span>{post.readTime}</span>
                {post.publishDate !== post.lastModified && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-600">
                      Updated {new Date(post.lastModified).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </>
                )}
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={post.image || '/blog_placeholder.jpg'}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* AdSense Ad - Mid Article */}
            <div className="my-12 py-8 bg-gray-50 rounded-lg">
              <div className="text-center">
                <AdSense />
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-blue-50 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-4">
                <Image
                  src="/images/profile/ren.png"
                  alt={post.author}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About {post.author}</h3>
                  <p className="text-gray-600 mb-4">
                    Full-stack developer specializing in Laravel, Next.js, React, WordPress, and Shopify. 
                    Passionate about creating efficient, scalable web applications and sharing knowledge through practical tutorials.
                  </p>
                  <div className="flex space-x-4">
                    <Link 
                      href="/contact" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Get in touch →
                    </Link>
                    <Link 
                      href="/portfolio" 
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Portfolio →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <SocialShare title={post.title} slug={post.slug} className="flex space-x-4" />
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <Link href={`/blogs/${relatedPost.slug}`}>
                      <div className="aspect-video bg-gray-200 relative overflow-hidden">
                        <Image
                          src={relatedPost.image || '/blog_placeholder.jpg'}
                          alt={relatedPost.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={relatedPost.publishDate}>
                          {new Date(relatedPost.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link href={`/blogs/${relatedPost.slug}`}>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  href="/blogs"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View All Articles →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* AdSense Ad - Bottom */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <AdSense />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}