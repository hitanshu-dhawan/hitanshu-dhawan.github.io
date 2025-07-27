import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/hitanshu-dhawan',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/hitanshu-dhawan',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:hitanshudhawan1996@gmail.com',
      icon: Mail
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@hitanshudhawan',
      icon: FileText
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-mono font-medium">Hitanshu Dhawan</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Android Engineer passionate about building exceptional mobile experiences 
              and sharing knowledge with the developer community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              <a href="/open-source" className="text-gray-400 hover:text-white transition-colors">Open Source</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hitanshu Dhawan. Built with React and deployed with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;