import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, getBlogCategory, blogCategories } from '../../../lib/BlogdataList';
import Footer from '../../../components/layout/Footer';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = getBlogCategory(resolvedParams.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const posts = getBlogPosts(null, category.slug);

  return {
    title: `${category.name} - Web Development Blog | Renie Namocot`,
    description: `${category.description}. Browse ${posts.length} articles about ${category.name.toLowerCase()}, tutorials, and best practices.`,
    keywords: `${category.name.toLowerCase()}, web development, programming, tutorials, ${category.slug}, blog`,
    openGraph: {
      title: `${category.name} - Web Development Blog | Renie Namocot`,
      description: `${category.description}. Browse ${posts.length} articles about ${category.name.toLowerCase()}.`,
      url: `https://renienamocot.com/blogs/category/${category.slug}`,
      type: 'website',
      images: [
        {
          url: 'https://renienamocot.com/social-share.PNG',
          width: 1200,
          height: 630,
          alt: `${category.name} Articles - Renie Namocot Blog`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Web Development Blog | Renie Namocot`,
      description: `${category.description}. Browse ${posts.length} articles about ${category.name.toLowerCase()}.`,
      images: ['https://renienamocot.com/social-share.PNG']
    },
    alternates: {
      canonical: `/blogs/category/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = getBlogCategory(resolvedParams.slug);
  
  if (!category) {
    notFound();
  }

  const posts = getBlogPosts(null, category.slug);
  const otherCategories = blogCategories.filter(cat => cat.slug !== category.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} Articles`,
    description: category.description,
    url: `https://renienamocot.com/blogs/category/${category.slug}`,
    author: {
      '@type': 'Person',
      name: 'Renie Namocot',
      url: 'https://renienamocot.com'
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          url: `https://renienamocot.com/blogs/${post.slug}`,
          datePublished: post.publishDate,
          author: {
            '@type': 'Person',
            name: post.author
          },
          image: `https://renienamocot.com${post.image}`
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="pt-20 pb-4 bg-white border-b">
          <div className="container mx-auto px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blogs" className="hover:text-blue-600">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900">{category.name}</li>
            </ol>
          </div>
        </nav>

        {/* Category Header */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {category.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 text-gray-700 shadow-sm">
                <span className="text-sm font-medium">
                  {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* Category Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore Other Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/blogs"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                All Posts
              </Link>
              {otherCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blogs/category/${cat.slug}`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        {posts.length > 0 ? (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <Link href={`/blogs/${post.slug}`}>
                      <div className="h-64 bg-gray-200 relative overflow-hidden">
                        <Image
                          src={post.image || '/blog_placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>
                        )}
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
        ) : (
          <section className="py-16 bg-gray-50 text-center">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h3>
                <p className="text-gray-600 mb-8">
                  We're working on adding more {category.name.toLowerCase()} content. 
                  Check back soon for new articles!
                </p>
                <Link 
                  href="/blogs"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Browse All Articles
                </Link>
              </div>
            </div>
          </section>
        )}


        {/* Related Categories */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Explore More Topics</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover more web development insights across different technologies and frameworks.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blogs/category/${cat.slug}`}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    cat.slug === category.slug
                      ? 'bg-white text-blue-600 font-semibold'
                      : 'bg-blue-500 text-blue-100 hover:bg-white hover:text-blue-600'
                  }`}
                >
                  <div className="font-medium text-sm">{cat.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}