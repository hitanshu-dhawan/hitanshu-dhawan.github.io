import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../mock/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Call me during business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      description: 'Based in India'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      description: 'Check out my code and projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      description: 'Connect with me professionally'
    },
    {
      icon: FileText,
      label: 'Medium',
      href: personalInfo.medium,
      description: 'Read my technical articles'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, and opportunities 
            to be part of your vision. Whether you have a question about Android development 
            or want to collaborate on something exciting, I'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell me about your project, idea, or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl shadow-lg border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{method.label}</h3>
                        <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 font-medium">{method.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect Online</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <div className="bg-gray-100 group-hover:bg-blue-100 p-2 rounded-lg transition-colors">
                        <IconComponent size={20} className="text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.label}
                        </h3>
                        <p className="text-gray-600 text-sm">{link.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response Promise</h3>
              <p className="text-gray-700 mb-4">
                I understand that time is valuable in business. Here's what you can expect:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Email:</strong> Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Project Inquiries:</strong> Detailed response within 48 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Urgent Matters:</strong> Same day response when possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What type of projects do you work on?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I specialize in Android app development, from MVP prototypes to enterprise-scale 
                applications. I also work on open source libraries, developer tools, and provide 
                technical consulting for mobile architecture decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you provide mentoring or consulting?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes! I offer technical mentoring for developers looking to improve their Android 
                skills, and consulting services for teams needing guidance on mobile architecture, 
                performance optimization, or development best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Are you available for speaking engagements?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! I enjoy sharing knowledge at conferences, meetups, and corporate events. 
                I can speak on topics like Android development, mobile architecture, annotation 
                processing, and developer productivity.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What's your typical project timeline?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Project timelines vary based on scope and complexity. Small utilities or libraries 
                might take 2-4 weeks, while full applications can range from 2-6 months. I always 
                provide detailed estimates after understanding your requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;