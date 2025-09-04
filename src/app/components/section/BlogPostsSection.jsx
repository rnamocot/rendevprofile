'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { getBlogPosts } from '../../lib/BlogdataList';

export default function BlogPostsSection() {
  const recentPosts = getBlogPosts(3); // Get 3 most recent posts

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Stay updated with the latest web development trends, tutorials, and best practices from my blog.
          </p>
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-black transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <Link href={`/blogs/${post.slug}`}>
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={post.image || '/blog_placeholder.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {post.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Featured badge for first post */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold">
                        Latest
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                
                <Link href={`/blogs/${post.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="group inline-flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-black transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}