'use client';
import { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, blogCategories } from '../lib/BlogdataList';
import NewsletterSignup from './components/NewsletterSignup';
import AdSense from './components/AdSense';
import Footer from '../components/layout/Footer';

// Metadata will be handled by Next.js head or layout

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  const blogPosts = getBlogPosts();
  const featuredPosts = getBlogPosts(3, null, true);
  
  // Pagination logic
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  }, [blogPosts, currentPage, postsPerPage]);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to articles section
    document.getElementById('all-articles')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

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
      <Head>
        <title>Blog - Web Development Insights | Renie Namocot</title>
        <meta name="description" content="Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript. Learn from practical examples and best practices." />
        <meta name="keywords" content="web development blog, Next.js tutorials, React tips, WordPress development, Laravel guides, JavaScript ES2024, programming blog, developer insights" />
        <meta property="og:title" content="Blog - Web Development Insights | Renie Namocot" />
        <meta property="og:description" content="Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript." />
        <meta property="og:url" content="https://renienamocot.com/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://renienamocot.com/social-share.PNG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Web Development Insights | Renie Namocot" />
        <meta name="twitter:description" content="Explore web development tutorials, tips, and insights about Next.js, React, WordPress, Laravel, and modern JavaScript." />
        <meta name="twitter:image" content="https://renienamocot.com/social-share.PNG" />
        <link rel="canonical" href="https://renienamocot.com/blogs" />
      </Head>
      
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
                  <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                    <Link href={`/blogs/${post.slug}`}>
                      <div className="h-64 bg-gray-200 relative overflow-hidden">
                        <Image
                          src={post.image || '/blog_placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                        
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                            Featured
                          </span>
                        </div>
                        
                        {/* Title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-200 gap-2">
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
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

        {/* All Posts */}
        <section id="all-articles" className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
              <p className="text-gray-600">
                Showing {((currentPage - 1) * postsPerPage) + 1} - {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} articles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <Image
                        src={post.image || '/blog_placeholder.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-200 gap-2">
                          <time dateTime={post.publishDate}>
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          {post.featured && (
                            <>
                              <span>•</span>
                              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
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
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-1">
                  {/* First page */}
                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="w-10 h-10 rounded-lg font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer"
                      >
                        1
                      </button>
                      {currentPage > 4 && (
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                      )}
                    </>
                  )}

                  {/* Current page range */}
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    if (page >= currentPage - 2 && page <= currentPage + 2) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                            page === currentPage
                              ? 'bg-blue-600 text-white shadow-md cursor-pointer'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    return null;
                  })}

                  {/* Last page */}
                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && (
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                      )}
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="w-10 h-10 rounded-lg font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 cursor-pointer'
                  }`}
                >
                  Next
                </button>
              </div>
            )}

            {/* Page info */}
            <div className="text-center mt-6 text-sm text-gray-500">
              Page {currentPage} of {totalPages}
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