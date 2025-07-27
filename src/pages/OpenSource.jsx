import React from 'react';
import { Github, Star, GitFork, ExternalLink, Users, Activity, Calendar } from 'lucide-react';
import { projects, openSourceStats } from '../mock/data';

const OpenSource = () => {
  const mainProjects = projects.filter(p => p.stars && p.stars > 50);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Open Source Contributions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contributing to the developer community through open source projects, libraries, 
            and tools. Building solutions that help fellow developers be more productive 
            and create better applications.
          </p>
        </section>

        {/* GitHub Stats */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">GitHub Overview</h2>
              <a 
                href="https://github.com/hitanshu-dhawan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                Visit Profile
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{openSourceStats.totalRepos}</div>
                <div className="text-gray-300 text-sm">Public Repos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{openSourceStats.totalStars}</div>
                <div className="text-gray-300 text-sm">Total Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{openSourceStats.totalForks}</div>
                <div className="text-gray-300 text-sm">Total Forks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{openSourceStats.contributionsLastYear}</div>
                <div className="text-gray-300 text-sm">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">{openSourceStats.followers}</div>
                <div className="text-gray-300 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">{openSourceStats.following}</div>
                <div className="text-gray-300 text-sm">Following</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
                          <Star size={16} />
                          <span className="text-sm">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded">
                          <GitFork size={16} />
                          <span className="text-sm">{project.forks}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {project.recognition && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                      <p className="text-yellow-800 text-sm font-medium">
                        🏆 {project.recognition}
                      </p>
                    </div>
                  )}

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

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View Source
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

        {/* Contribution Philosophy */}
        <section className="mb-20">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Source Philosophy</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                I believe in the power of open source to accelerate innovation and democratize access 
                to high-quality tools and libraries. Every project I create aims to solve real problems 
                that I've encountered in my development journey, making them practical and immediately useful.
              </p>
              <p className="mb-6">
                My approach to open source goes beyond just publishing code. I focus on comprehensive 
                documentation, responsive community support, and continuous improvement based on user feedback. 
                Each project includes detailed README files, code examples, and clear contribution guidelines.
              </p>
              <p>
                The Android development community has given me so much throughout my career, and contributing 
                back through open source is my way of paying it forward. Whether it's a complex library 
                or a simple utility, every contribution matters in building a stronger ecosystem for all developers.
              </p>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Developers Helped</div>
              <div className="text-gray-600 text-sm">
                Through libraries, tutorials, and direct support
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity size={32} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Issues Resolved</div>
              <div className="text-gray-600 text-sm">
                Bugs fixed and feature requests implemented
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={32} className="text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-lg font-medium text-gray-900 mb-2">Years Contributing</div>
              <div className="text-gray-600 text-sm">
                Consistent contributions since 2017
              </div>
            </div>
          </div>
        </section>

        {/* How to Contribute */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Contribute</h2>
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Beginners</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Look for issues labeled "good first issue" in my repositories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Start by improving documentation or fixing typos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Join discussions and ask questions in issue threads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Test new features and report any bugs you find</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Experienced Developers</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Implement new features and performance improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Review pull requests and mentor new contributors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Suggest architectural improvements and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Help maintain and update dependencies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gray-900 text-white rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to contribute to existing projects or start something new, 
            I'm always excited to collaborate with fellow developers who share a passion for 
            building great software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/hitanshu-dhawan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Github size={20} />
              Follow on GitHub
            </a>
            <a 
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OpenSource;