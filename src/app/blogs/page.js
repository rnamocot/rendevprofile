'use client';
import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, blogCategories } from '../lib/BlogdataList';
import NewsletterSignup from './components/NewsletterSignup';
import BlogSidebar from './components/BlogSidebar';
import Footer from '../components/layout/Footer';

// Metadata will be handled by Next.js head or layout

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 10;
  
  // Handle URL search parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, []);
  
  const allBlogPosts = getBlogPosts();
  const featuredPosts = getBlogPosts(3, null, true);
  
  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allBlogPosts;
    }
    
    const query = searchQuery.toLowerCase();
    return allBlogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
      const categoryMatch = post.category.toLowerCase().includes(query);
      
      return titleMatch || excerptMatch || tagsMatch || categoryMatch;
    });
  }, [searchQuery, allBlogPosts]);
  
  const blogPosts = filteredPosts;
  
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
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          @keyframes pulse-soft {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
          
          .animate-pulse-soft {
            animation: pulse-soft 2s ease-in-out infinite;
          }
        `}</style>
        {/* Enhanced Hero Section */}
        <section className="pt-20 pb-16 relative overflow-hidden" style={{ backgroundColor: '#eef4ff' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-32 h-32 border border-gray-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border border-gray-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-gray-400 transform -rotate-45 opacity-50"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-12 bg-gray-400 transform rotate-45 opacity-50"></div>
            <div className="absolute top-10 right-1/4 w-4 h-4 bg-gray-500 rounded-full animate-ping"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm text-gray-700 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {totalPosts}+ Articles • Updated Weekly
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Web Development</span>
                <span className="block text-black font-extrabold">
                  Insights
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Master modern web development with in-depth tutorials, practical guides, and industry best practices.
              </p>
              
              {/* Enhanced Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles, technologies, tutorials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && document.getElementById('all-articles')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full px-6 py-4 pl-14 pr-16 text-lg bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                  />
                  <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                {searchQuery && (
                  <div className="mt-4 text-gray-700">
                    <span className="text-sm">Press Enter to search or scroll to see results below</span>
                  </div>
                )}
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{totalPosts}+</div>
                  <div className="text-gray-600">Articles Published</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{blogCategories.length}</div>
                  <div className="text-gray-600">Technology Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                  <div className="text-gray-600">Developers Reading</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>


        {/* Enhanced Categories Filter */}
        <section className="py-12 bg-white shadow-sm relative">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Explore by Technology
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dive deep into your favorite technologies and frameworks
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Link 
                href="/blogs"
                className="group px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  All Posts ({totalPosts})
                </span>
              </Link>
              
              {blogCategories.map((category) => {
                const categoryPosts = getBlogPosts(null, category.slug).length;
                const categoryIcons = {
                  'next-js': '⚡',
                  'react': '⚛️',
                  'laravel': '🎯',
                  'php': '🐘',
                  'javascript': '🟨',
                  'wordpress': '📝',
                  'ai-development': '🤖',
                  'productivity': '🚀',
                  'web-development': '🌐'
                };
                
                return (
                  <Link
                    key={category.id}
                    href={`/blogs/category/${category.slug}`}
                    className="group px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{categoryIcons[category.slug] || '📄'}</span>
                      {category.name}
                      <span className="text-xs bg-gray-200 group-hover:bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full transition-colors">
                        {categoryPosts}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            
            {/* Trending Badge */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Latest: PHP 9 & Laravel Livewire guides</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Editor's Picks
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Must-Read Articles
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Handpicked content that's making waves in the developer community
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                      index === 0 && featuredPosts.length > 1 ? 'lg:col-span-2 xl:col-span-1' : ''
                    }`}
                  >
                    <Link href={`/blogs/${post.slug}`}>
                      <div className={`${index === 0 ? 'h-80' : 'h-64'} bg-gray-200 relative overflow-hidden`}>
                        <Image
                          src={post.image || '/blog_placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Enhanced overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                        
                        {/* Featured badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                            ⭐ Featured
                          </span>
                          {index === 0 && (
                            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                              🔥 Trending
                            </span>
                          )}
                        </div>
                        
                        {/* Enhanced content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 font-medium">
                            <span className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                              {post.category.replace('-', ' ').toUpperCase()}
                            </span>
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
                          
                          <h3 className={`${index === 0 ? 'text-2xl' : 'text-xl'} font-bold text-white mb-3 line-clamp-2 group-hover:text-gray-100 transition-colors duration-300`}>
                            {post.title}
                          </h3>
                          
                          {index === 0 && (
                            <p className="text-gray-300 line-clamp-2 mb-4 opacity-90">
                              {post.excerpt}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                              <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                                R
                              </div>
                            </div>
                            <div className="text-white/80 text-sm flex items-center gap-1 group-hover:text-gray-100 transition-colors">
                              Read more
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tag} 
                            className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                              tagIndex === 0 
                                ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' 
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {index !== 0 && (
                        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Call to action */}
              <div className="text-center mt-12">
                <Link 
                  href="#all-articles"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('all-articles')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore All Articles
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* All Posts with Sidebar */}
        <section id="all-articles" className="py-8 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">
                {searchQuery ? 'Search Results' : 'All Articles'}
              </h2>
              {searchQuery && (
                <div className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    Search results for: "{searchQuery}"
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Found {totalPosts} article{totalPosts !== 1 ? 's' : ''}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      window.history.pushState({}, '', '/blogs');
                    }}
                    className="mt-2 text-gray-600 hover:text-gray-700 text-sm font-medium"
                  >
                    Clear search →
                  </button>
                </div>
              )}
              <p className="text-sm lg:text-base text-gray-600">
                Showing {totalPosts > 0 ? ((currentPage - 1) * postsPerPage) + 1 : 0} - {Math.min(currentPage * postsPerPage, totalPosts)} of {totalPosts} articles
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
              {/* Main Content Area */}
              <div className="xl:col-span-3">
                {paginatedPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {paginatedPosts.map((post, index) => (
                      <article 
                        key={post.id} 
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-1"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                      >
                        <Link href={`/blogs/${post.slug}`}>
                          <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                            <Image
                              src={post.image || '/blog_placeholder.jpg'}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            
                            {/* Enhanced gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                            
                            {/* Category badge */}
                            <div className="absolute top-4 right-4">
                              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                {post.category.replace('-', ' ').toUpperCase()}
                              </span>
                            </div>
                            
                            {/* Featured badge */}
                            {post.featured && (
                              <div className="absolute top-4 left-4">
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                                  ⭐ Featured
                                </span>
                              </div>
                            )}
                            
                            {/* Title overlay with better typography */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <div className="flex items-center gap-2 text-sm text-gray-300 mb-3 font-medium">
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
                              
                              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gray-100 transition-colors duration-300 leading-tight">
                                {post.title}
                              </h3>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <span className="text-white/90 text-sm font-medium">{post.author}</span>
                                </div>
                                <div className="text-white/80 text-sm flex items-center gap-1 group-hover:text-gray-100 transition-colors">
                                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        
                        <div className="p-6">
                          <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span 
                                  key={tag} 
                                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                                    tagIndex === 0 
                                      ? 'bg-gray-200 text-gray-900 hover:bg-gray-300' 
                                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                  }`}
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                            
                            <Link 
                              href={`/blogs/${post.slug}`}
                              className="group inline-flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-black transition-all duration-200"
                            >
                              Read Article
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-500 mb-4">
                      {searchQuery 
                        ? `No articles match "${searchQuery}". Try different keywords or browse categories.`
                        : 'No articles available at the moment.'
                      }
                    </p>
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          window.history.pushState({}, '', '/blogs');
                        }}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                      >
                        View All Articles
                      </button>
                    )}
                  </div>
                )}
                
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
                              ? 'bg-gray-900 text-white shadow-md cursor-pointer'
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
              
              {/* Sidebar */}
              <div className="xl:col-span-1 order-last">
                <BlogSidebar />
              </div>
            </div>
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
                <span className="block text-white">
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