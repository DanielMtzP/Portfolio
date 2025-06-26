import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  GitBranch,
  Cloud,
  Layers,
  Monitor,
  Zap,
  Shield
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend',
      techs: [
        { name: 'React', icon: <Code2 />, level: 95 },
        { name: 'TypeScript', icon: <Code2 />, level: 90 },
        { name: 'Next.js', icon: <Globe />, level: 88 },
        { name: 'Vue.js', icon: <Code2 />, level: 85 },
      ]
    },
    {
      title: 'Backend',
      techs: [
        { name: 'Node.js', icon: <Server />, level: 92 },
        { name: 'Python', icon: <Server />, level: 88 },
        { name: 'PostgreSQL', icon: <Database />, level: 90 },
        { name: 'MongoDB', icon: <Database />, level: 85 },
      ]
    },
    {
      title: 'Mobile & Design',
      techs: [
        { name: 'React Native', icon: <Smartphone />, level: 87 },
        { name: 'Flutter', icon: <Smartphone />, level: 82 },
        { name: 'Figma', icon: <Palette />, level: 95 },
        { name: 'Adobe XD', icon: <Palette />, level: 88 },
      ]
    },
    {
      title: 'DevOps & Tools',
      techs: [
        { name: 'Docker', icon: <Cloud />, level: 85 },
        { name: 'AWS', icon: <Cloud />, level: 80 },
        { name: 'Git', icon: <GitBranch />, level: 95 },
        { name: 'CI/CD', icon: <Zap />, level: 82 },
      ]
    }
  ];

  const mainTechnologies = [
    { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '💚', color: 'from-green-500 to-emerald-500' },
    { name: 'Python', icon: '🐍', color: 'from-blue-600 to-yellow-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-700' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-700 to-indigo-700' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-yellow-500' },
    { name: 'Git', icon: '📱', color: 'from-red-500 to-pink-500' },
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies <span className="text-purple-400">I'm Using</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My toolkit for building exceptional digital experiences
          </p>
        </div>

        {/* Main Technologies Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {mainTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <div className="text-white font-medium text-xs sm:text-sm">{tech.name}</div>
              <div className={`mt-2 h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Detailed Tech Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                {category.title}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="text-purple-400 mr-3 group-hover:text-pink-400 transition-colors duration-300">
                          {React.cloneElement(tech.icon, { size: 20 })}
                        </div>
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                      <span className="text-purple-400 text-sm">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-pink-400"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">And Many More...</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {[
              'GraphQL', 'Redux', 'Webpack', 'Sass', 'Tailwind CSS', 'Jest', 
              'Cypress', 'Firebase', 'Supabase', 'Vercel', 'Netlify', 'Linux'
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm hover:bg-purple-600/30 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;