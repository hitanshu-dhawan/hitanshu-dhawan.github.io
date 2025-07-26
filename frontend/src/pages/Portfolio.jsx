import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { otherProjects, talks } from '../mock/data';

const Portfolio = () => {
  const categoryColors = {
    algorithm: 'bg-purple-100 text-purple-800',
    library: 'bg-blue-100 text-blue-800',
    game: 'bg-green-100 text-green-800',
    tool: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio & Other Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond my main projects, here's a collection of smaller projects, experiments, 
            libraries, and speaking engagements that showcase different aspects of my work 
            and interests in software development.
          </p>
        </section>

        {/* Other Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[project.category] || 'bg-gray-100 text-gray-800'}`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    {project.stars && (
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Talks & Presentations */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Talks & Presentations</h2>
          <div className="space-y-6">
            {talks.map((talk) => (
              <div key={talk.id} className="bg-white rounded-xl shadow-sm border p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{talk.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="font-medium text-blue-600">{talk.event}</span>
                      <span>{talk.date}</span>
                      <span>{talk.location}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{talk.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Resources:</h4>
                    {talk.slides && (
                      <a
                        href={talk.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        View Slides
                      </a>
                    )}
                    {talk.video && (
                      <a
                        href={talk.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        Watch Video
                      </a>
                    )}
                    {talk.podcast && (
                      <a
                        href={talk.podcast}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        Listen Podcast
                      </a>
                    )}
                    {talk.code && (
                      <a
                        href={talk.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Github size={14} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experiments & Learning */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experiments & Learning</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Learning</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Advanced Jetpack Compose techniques and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kotlin Multiplatform development for shared business logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Machine Learning integration in mobile applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Cloud-native Android development patterns</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Open source library for advanced text animations in Compose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developer tool for automated accessibility testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tutorial series on modern Android architecture patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Performance benchmarking tool for Android applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-blue-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether it's a complex mobile application, an open source library, 
            or a speaking opportunity, I'm always excited to collaborate on meaningful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Start a Conversation
            </a>
            <a 
              href="/open-source"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Open Source Work
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;