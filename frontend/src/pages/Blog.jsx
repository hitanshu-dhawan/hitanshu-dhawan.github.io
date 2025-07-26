import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Award, ArrowRight } from 'lucide-react';
import { blogPosts } from '../mock/data';

const Blog = () => {
  const [filter, setFilter] = useState('all');

  // Extract unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  const tags = ['all', ...allTags];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(filter));

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts on Android development, mobile architecture, 
            and the latest trends in mobile technology. Learn from real-world experiences and 
            practical implementations.
          </p>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Award className="text-yellow-500" size={24} />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {post.recognition && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                            <Award size={16} />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      
                      {post.recognition && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                          <p className="text-yellow-800 text-sm font-medium">{post.recognition}</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        Read More
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Filter Tags */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  filter === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Tag size={14} />
                  {tag === 'all' ? 'All Posts' : tag}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {filter === 'all' ? 'All Articles' : `Articles tagged "${filter}"`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.featured && (
                      <div className="absolute top-3 left-3">
                        <div className="bg-yellow-500 text-white p-1 rounded">
                          <Award size={12} />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                      Read Article
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about Android development, 
            mobile architecture, and the latest trends in mobile technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-sm"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Blog;