import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Award, ExternalLink } from 'lucide-react';
import { blogPosts } from '../mock/data';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const suggestedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {post.recognition && (
              <div className="absolute top-6 left-6">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
                  <Award size={16} />
                  Featured Article
                </div>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {post.recognition && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium flex items-center gap-2">
                <Award size={16} />
                {post.recognition}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Article Summary</h2>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </div>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>{post.content}</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
            <p>
              In the ever-evolving world of Android development, staying up-to-date with the latest 
              tools and techniques is crucial for building high-quality applications. This comprehensive 
              guide will walk you through the concepts and practical implementations that have proven 
              valuable in real-world projects.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Concepts</h2>
            <p>
              Understanding the fundamentals is essential before diving into implementation details. 
              We'll explore the core principles that make this approach effective and sustainable 
              for long-term project maintenance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-blue-800 font-medium">
                💡 <strong>Pro Tip:</strong> Always consider the broader architectural implications 
                when implementing new features. What seems simple at first might have complex 
                interactions with other parts of your application.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Details</h2>
            <p>
              Let's dive into the practical aspects of implementation. The following code examples 
              demonstrate the concepts in action and can be adapted to your specific use cases.
            </p>

            <div className="bg-gray-900 text-white rounded-lg p-6 overflow-x-auto my-8">
              <pre className="text-sm">
                <code>{`// Example code snippet
class AnnotationProcessor : AbstractProcessor() {
    override fun process(
        annotations: MutableSet<out TypeElement>?,
        roundEnv: RoundEnvironment?
    ): Boolean {
        // Implementation logic
        return true
    }
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
            <ul className="space-y-2">
              <li>• Always validate your inputs and handle edge cases gracefully</li>
              <li>• Write comprehensive tests for your implementation</li>
              <li>• Document your code thoroughly for future maintainers</li>
              <li>• Consider performance implications early in the design process</li>
              <li>• Follow established coding standards and patterns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p>
              By implementing these concepts in your Android projects, you'll be able to create 
              more maintainable, scalable, and efficient applications. Remember that the key to 
              successful implementation is understanding not just the "how" but also the "why" 
              behind each decision.
            </p>

            <p>
              I hope this article has been helpful in your Android development journey. If you 
              have any questions or would like to discuss these concepts further, feel free to 
              reach out through the contact page or connect with me on social media.
            </p>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <img 
              src="https://images.unsplash.com/photo-1689218744786-9546da7b6873?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTM1NDg2MTd8MA&ixlib=rb-4.1.0&q=85"
              alt="Hitanshu Dhawan"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hitanshu Dhawan</h3>
              <p className="text-gray-700 mb-4">
                Senior Android Engineer passionate about building exceptional mobile experiences 
                and sharing knowledge with the developer community. Currently working at PhonePe 
                and contributing to open source projects.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/about"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Learn More
                </Link>
                <Link 
                  to="/contact"
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {suggestedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={12} className="mr-1" />
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <Clock size={12} className="ml-3 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;