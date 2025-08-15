'use client';
import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, blogCategories } from '../../lib/BlogdataList';

export default function BlogSidebar({ currentPostSlug = null }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchInputRef = useRef(null);

  // Keyboard shortcut to focus search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      // Close search results on Escape
      if (e.key === 'Escape') {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchInputRef.current && !searchInputRef.current.closest('.search-container').contains(e.target)) {
        setShowSearchResults(false);
      }
    };

    if (showSearchResults) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSearchResults]);

  // Get all posts
  const allPosts = getBlogPosts();
  
  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allPosts
      .filter(post => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt.toLowerCase().includes(query);
        const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
        const categoryMatch = post.category.toLowerCase().includes(query);
        
        return titleMatch || excerptMatch || tagsMatch || categoryMatch;
      })
      .slice(0, 5); // Limit to 5 results
  }, [searchQuery, allPosts]);

  // Get recent posts (excluding current post if on a blog post page)
  const recentPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 5);
  
  // Get popular posts (featured posts)
  const popularPosts = allPosts
    .filter(post => post.featured && post.slug !== currentPostSlug)
    .slice(0, 4);

  // Get post counts by category
  const categoryStats = blogCategories.map(category => ({
    ...category,
    count: allPosts.filter(post => post.category === category.slug).length
  }));

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.trim().length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navigate to the first result
      window.location.href = `/blogs/${searchResults[0].slug}`;
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  return (
    <aside className="space-y-6 lg:space-y-8 xl:sticky xl:top-24 xl:self-start">
      {/* Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative search-container">
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">Search Articles</h3>
          <span className="text-xs text-gray-400 font-mono">⌘K</span>
        </div>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearchInput}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-8 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button 
            type="submit"
            className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* Search Results Dropdown */}
        {showSearchResults && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <>
                <div className="p-3 border-b border-gray-100">
                  <p className="text-xs text-gray-500 font-medium">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="py-2">
                  {searchResults.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blogs/${post.slug}`}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setShowSearchResults(false);
                        setSearchQuery('');
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.image || '/blog_placeholder.jpg'}
                            alt={post.title}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mb-1">
                            {blogCategories.find(cat => cat.slug === post.category)?.name || post.category}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {searchResults.length >= 5 && (
                  <div className="p-3 border-t border-gray-100 bg-gray-50">
                    <Link 
                      href={`/blogs?search=${encodeURIComponent(searchQuery)}`}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                      onClick={() => setShowSearchResults(false)}
                    >
                      See all results →
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">No articles found</p>
                <p className="text-xs text-gray-400 mt-1">
                  Try different keywords or browse categories
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.id} className="flex gap-3 group">
              <Link href={`/blogs/${post.slug}`} className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={post.image || '/blog_placeholder.jpg'}
                    alt={post.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/blogs/${post.slug}`}>
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link 
            href="/blogs" 
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View All Posts →
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Categories</h3>
        <div className="space-y-2">
          {categoryStats.map((category) => (
            <Link
              key={category.id}
              href={`/blogs/category/${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group"
            >
              <span className="text-sm font-medium group-hover:text-blue-600">
                {category.name}
              </span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Popular Posts</h3>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <article key={post.id} className="flex gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/blogs/${post.slug}`}>
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                  </Link>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <time dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-lg shadow-md text-white">
        <h3 className="text-base lg:text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get the latest web development insights delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 rounded-lg bg-white/20 backdrop-blur text-white placeholder-gray-300 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/50 outline-none"
          />
          <button className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">No spam, unsubscribe anytime</p>
      </div>

      {/* Tags Cloud */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript', 'React', 'Next.js', 'WordPress', 'Laravel', 
            'PHP', 'CSS', 'HTML', 'Node.js', 'TypeScript', 'API', 
            'Database', 'Performance', 'SEO', 'Security'
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">About the Author</h3>
        <div className="text-center">
          <Image
            src="/images/profile/ren.png"
            alt="Renie Namocot"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />
          <h4 className="font-semibold text-gray-900 mb-2">Renie Namocot</h4>
          <p className="text-gray-600 text-sm mb-4">
            Full-stack developer with expertise in Laravel, Next.js, React, and WordPress. 
            Passionate about sharing knowledge through practical tutorials.
          </p>
          <div className="flex justify-center space-x-3">
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/portfolio" 
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>

    </aside>
  );
}