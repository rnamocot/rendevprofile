'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, blogCategories } from '../../lib/BlogdataList';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    // Filter posts based on selected category
    if (selectedCategory === 'all') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }

    // Set featured posts
    setFeaturedPosts(blogPosts.filter(post => post.featured).slice(0, 3));
  }, [selectedCategory]);

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge development tutorials, insights, and best practices 
            for modern web development, AI integration, and performance optimization.
          </p>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <FeaturedBlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Posts
          </button>
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.slice(0, 9).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Blog Posts
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Featured Blog Card Component
function FeaturedBlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.featuredImageUrl || post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              Featured
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {blogCategories.find(cat => cat.id === post.category)?.name}
            </span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">By {post.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Regular Blog Card Component
function BlogCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.featuredImageUrl || post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
              {blogCategories.find(cat => cat.id === post.category)?.name}
            </span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-500" dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span className="text-blue-600 text-sm font-medium group-hover:underline">
              Read More ’
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}