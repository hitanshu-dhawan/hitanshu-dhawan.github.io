import React from 'react';
import { ArrowRight, Code, Smartphone, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const achievements = [
    {
      icon: Code,
      number: "8+",
      label: "Years of Experience",
      description: "Building mobile applications"
    },
    {
      icon: Smartphone,
      number: "20+",
      label: "Apps Developed",
      description: "Published on Play Store"
    },
    {
      icon: Users,
      number: "1M+",
      label: "Users Impacted",
      description: "Through applications built"
    },
    {
      icon: Award,
      number: "3",
      label: "Android Weekly Features",
      description: "Projects featured in community"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTM1NDg2NDR8MA&ixlib=rb-4.1.0&q=85"
            alt="Mobile development workspace"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Android Engineer.
                <br />
                <span className="text-blue-600">Problem Solver.</span>
                <br />
                Life-long Learner.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Senior Android Engineer at PhonePe, passionate about building exceptional mobile experiences 
                and sharing knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building meaningful solutions that make a difference in people's lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {achievement.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Some of my notable projects that have been featured in Android Weekly
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* McCompose Project */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">McCompose</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">McCompose</h3>
                  <p className="text-gray-600 mb-6">
                    A McDonald's app built with Jetpack Compose, featuring animations, 
                    custom layouts, and state management. Featured in Android Weekly Issue #453.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Jetpack Compose</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Kotlin</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Android</span>
                  </div>
                  <Link 
                    to="/projects"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* SpannableStringParser Project */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-mono font-bold">
                    &lt;/&gt;
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SpannableStringParser</h3>
                  <p className="text-gray-600 mb-6">
                    An Android library for easily styling text with formatted strings from 
                    backend servers. Featured in Android Weekly Issue #396.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Android Library</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Kotlin</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Text Processing</span>
                  </div>
                  <Link 
                    to="/projects"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;