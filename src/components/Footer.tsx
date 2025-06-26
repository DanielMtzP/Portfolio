import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, MessageCircleMore } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    // { icon: <Twitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail />, href: 'mailto:hello@drischdaan.dev', label: 'Email' },
    { icon: <MessageCircleMore />, href: 'https://wa.me/+525519061300', label: 'Phone' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mi', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-400">D</span>ANIEL MARTÍNEZ
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Apasionado desarrollador front-end con experiencia en la creación de interfaces de usuario inutitivas así como aplicaciones modernas, funcionales y fáciles de usar.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
                >
                  {React.cloneElement(link.icon, { size: 24 })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contáctame</h3>
            <div className="space-y-3 text-gray-400">
              <p>danien888@hotmail.com</p>
              <p>+52 (55) 1906-1300</p>
              <p>CDMX, Miguel Hidalgo - México</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} Daniel. Made with 
                <Heart className="text-red-500 mx-1" size={16} />
                and lots of coffee.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden text-gray-400 text-sm">
                <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;