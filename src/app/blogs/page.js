import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, blogCategories } from '../lib/BlogdataList';
import NewsletterSignup from './components/NewsletterSignup';
import AdSense from './components/AdSense';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'Blog - Web Development Insights | Renie Namocot',
  description: 'Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript. Learn from practical examples and best practices.',
  keywords: 'web development blog, Next.js tutorials, React tips, WordPress development, Laravel guides, JavaScript ES2024, programming blog, developer insights',
  openGraph: {
    title: 'Blog - Web Development Insights | Renie Namocot',
    description: 'Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript.',
    url: 'https://renienamocot.com/blogs',
    type: 'website',
    images: [
      {
        url: 'https://renienamocot.com/social-share.PNG',
        width: 1200,
        height: 630,
        alt: 'Renie Namocot Blog - Web Development Insights'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Web Development Insights | Renie Namocot',
    description: 'Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript.',
    images: ['https://renienamocot.com/social-share.PNG']
  },
  alternates: {
    canonical: '/blogs'
  }
};

export default function BlogPage() {
  const blogPosts = getBlogPosts();
  const featuredPosts = getBlogPosts(3, null, true);
  const recentPosts = getBlogPosts(6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Renie Namocot Blog',
    description: 'Web development insights, tutorials, and best practices',
    url: 'https://renienamocot.com/blogs',
    author: {
      '@type': 'Person',
      name: 'Renie Namocot',
      url: 'https://renienamocot.com'
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://renienamocot.com/blogs/${post.slug}`,
      datePublished: post.publishDate,
      dateModified: post.lastModified,
      author: {
        '@type': 'Person',
        name: post.author
      },
      image: `https://renienamocot.com${post.image}`,
      articleSection: post.category
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Development Blog
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover insights, tutorials, and best practices for modern web development. 
                From Next.js to Laravel, stay updated with the latest trends and techniques.
              </p>
            </div>
          </div>
        </section>


        {/* Categories Filter */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/blogs"
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                All Posts
              </Link>
              {blogCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blogs/category/${category.slug}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <Link href={`/blogs/${post.slug}`}>
                      <div className="h-64 bg-gray-200 relative overflow-hidden">
                        <Image
                          src={post.image || '/blog_placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={post.publishDate}>
                          {new Date(post.publishDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blogs/${post.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <Image
                        src={post.image || '/blog_placeholder.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blogs/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blogs/${post.slug}`}
                        className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AdSense Ad - Below Recent Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <AdSense />
          </div>
        </section>

        {/* Newsletter Signup - Redesigned */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-white transform -rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-white transform rotate-45"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-gray-800/50 backdrop-blur-sm text-sm text-gray-300 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Join 1000+ developers
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Ahead in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Web Development
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Get exclusive insights, tutorials, and the latest trends in modern web development. 
                Join our community of passionate developers.
              </p>
              
              <NewsletterSignup />
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-700">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No spam, ever</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Weekly insights</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}