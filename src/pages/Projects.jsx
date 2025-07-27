import React, { useState } from 'react';
import { ExternalLink, Github, Star, GitFork, Award } from 'lucide-react';
import { projects } from '../mock/data';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'library', name: 'Libraries' },
    { id: 'tutorial', name: 'Tutorials' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in Android development, 
            open source libraries, and mobile app architecture. Many have been featured 
            in Android Weekly and used by thousands of developers.
          </p>
        </section>

        {/* Filter Tabs */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Recognition Badge */}
                  {project.recognition && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                        <Award size={16} />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex gap-4 text-white">
                    {project.stars && (
                      <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
                        <Star size={16} />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
                        <GitFork size={16} />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Recognition */}
                  {project.recognition && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                      <p className="text-yellow-800 text-sm font-medium flex items-center gap-2">
                        <Award size={16} />
                        {project.recognition}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Details Modal would go here in a real implementation */}
        
        {/* Call to Action */}
        <section className="text-center mt-20 py-16 bg-gray-50 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, and opportunities 
            to be part of your vision.
          </p>
          <a 
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Get In Touch
            <ExternalLink size={18} />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;