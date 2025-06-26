import React from 'react';
import { Code, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design'],
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide exceptional user experience.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native Development'],
    },
    {
      icon: <Database />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs and database design.',
      features: ['Node.js', 'Python', 'Database Design'],
    },
    {
      icon: <Globe />,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics'],
    },
    {
      icon: <Zap />,
      title: 'Performance Optimization',
      description: 'Speed up your applications with performance audits and optimization techniques.',
      features: ['Code Optimization', 'SEO', 'Performance Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I offer comprehensive digital solutions to help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-purple-400 mb-6 group-hover:text-pink-400 transition-colors duration-300">
                {React.cloneElement(service.icon, { size: 48 })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;