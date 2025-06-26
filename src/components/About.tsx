import React from 'react';
import { User, Award, Coffee, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award />, label: 'Projects Completed', value: '50+' },
    { icon: <Coffee />, label: 'Cups of Coffee', value: '1000+' },
    { icon: <Clock />, label: 'Years Experience', value: '5+' },
    { icon: <User />, label: 'Happy Clients', value: '30+' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 88 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Mobile Development', level: 85 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate developer with expertise in creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience in creating 
              beautiful, functional, and user-friendly applications. I specialize in modern web 
              technologies and love turning complex problems into simple, beautiful designs.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community.
            </p>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {React.cloneElement(stat.icon, { size: 32 })}
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;