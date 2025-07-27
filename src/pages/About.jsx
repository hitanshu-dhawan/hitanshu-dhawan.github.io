import React from 'react';
import { Calendar, MapPin, Award, Code, Smartphone, Users } from 'lucide-react';
import { personalInfo, experience, education, skills, achievements } from '../mock/data';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  About Me
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-blue-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Code size={20} className="text-blue-600" />
                  <span>{personalInfo.title} at {personalInfo.company}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Award size={20} className="text-blue-600" />
                  <span>Google Certified Android Developer</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTM0OTg5NTF8MA&ixlib=rb-4.1.0&q=85"
                  alt="Hitanshu Dhawan"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 transform rotate-6"></div>
            </div>
          </div>
        </section>

        {/* Journey & Philosophy */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Journey</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                My journey into software development began during my college years at Manav Rachna International University, 
                where I discovered my passion for creating digital solutions that solve real-world problems. What started 
                as curiosity about how mobile apps work has evolved into a career dedicated to building exceptional Android experiences.
              </p>
              <p className="mb-6">
                Over the years, I've had the privilege of working with amazing teams at Urban Company and now PhonePe, 
                where I've contributed to applications used by millions of users. Each project has taught me something new, 
                whether it's about performance optimization, user experience design, or the intricacies of large-scale mobile architecture.
              </p>
              <p>
                I believe in the power of continuous learning and sharing knowledge with the community. This philosophy has 
                led me to contribute to open source projects, write technical articles, and speak at developer events. 
                My goal is to not just write code, but to mentor others and contribute to the growth of the Android development ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-white rounded-xl shadow-sm border p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-600 mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
                <p className="text-lg text-blue-600 font-medium">{education.institution}</p>
              </div>
              <div className="text-gray-600 mt-2 md:mt-0">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={16} />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Highlights:</h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Smartphone className="text-blue-600" size={24} />
                Primary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.primary.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Code className="text-green-600" size={24} />
                Secondary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.secondary.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="text-purple-600" size={24} />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="text-orange-600" size={24} />
                Specialties
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.specialties.map((specialty, idx) => (
                  <span 
                    key={idx}
                    className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-xl shadow-sm border p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{achievement.date}</p>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;