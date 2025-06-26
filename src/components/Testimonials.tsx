import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      company: 'TechStart Inc.',
      content: 'Working with Drischdaan was an absolute pleasure. The attention to detail and quality of work exceeded our expectations. Our e-commerce platform has never looked better!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLab',
      content: 'The mobile app developed by Drischdaan transformed our business. Clean code, beautiful design, and exceptional performance. Highly recommended for any serious project.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'CreativeAgency',
      content: 'Professional, reliable, and incredibly talented. Drischdaan delivered our website ahead of schedule and it has significantly improved our conversion rates.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder',
      company: 'NextGen Solutions',
      content: 'From concept to deployment, the entire process was smooth and collaborative. The final product exceeded our vision and our users love the new interface.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Thompson',
      role: 'CTO',
      company: 'DataFlow Systems',
      content: 'Outstanding technical skills combined with excellent communication. The dashboard application has streamlined our operations and improved team productivity.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Park',
      role: 'Business Owner',
      company: 'Local Restaurant Chain',
      content: 'The online ordering system has revolutionized our business. Easy to use, mobile-friendly, and integrates perfectly with our existing operations.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved By <span className="text-purple-400">Developers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's what my clients and colleagues say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-300">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-500/20"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-purple-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '99%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;