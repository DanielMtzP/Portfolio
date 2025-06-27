import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiGit, 
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiJest,
  SiNetlify,
  SiWebpack,
  SiSass,
  SiAngular,
  SiGithub,
  SiNextdotjs,
  SiVuedotjs
} from 'react-icons/si';
import Lottie from 'lottie-react';
import developerAnimation from '../lotties/developer.json';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend',
      techs: [
        { name: 'React', icon: <SiReact />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 88 },
        { name: 'Vue.js', icon: <SiVuedotjs />, level: 85 },
      ]
    },
    // {
    //   title: 'Backend',
    //   techs: [
    //     { name: 'Node.js', icon: <SiNodedotjs />, level: 92 },
    //     { name: 'Python', icon: <SiPython />, level: 88 },
    //     { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
    //     { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
    //   ]
    // },
    // {
    //   title: 'Mobile & Design',
    //   techs: [
    //     { name: 'React Native', icon: <Smartphone />, level: 87 },
    //     { name: 'Flutter', icon: <SiFlutter />, level: 82 },
    //     { name: 'Figma', icon: <SiFigma />, level: 95 },
    //     { name: 'Adobe XD', icon: <SiAdobexd />, level: 88 },
    //   ]
    // },
    // {
    //   title: 'DevOps & Tools',
    //   techs: [
    //     { name: 'Docker', icon: <SiDocker />, level: 85 },
    //     { name: 'AWS', icon: <SiAmazon />, level: 80 },
    //     { name: 'Git', icon: <SiGit />, level: 95 },
    //     { name: 'Firebase', icon: <SiFirebase />, level: 82 },
    //   ]
    // }
  ];

  const mainTechnologies = [
    { name: 'HTML5', icon: <SiHtml5 />, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: <SiCss3 />, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: <SiReact />, color: 'from-cyan-400 to-blue-500' },
    { name: 'Angular', icon: <SiAngular />, color: 'from-red-600 to-red-700' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'from-blue-600 to-blue-700' },
    { name: 'Git', icon: <SiGit />, color: 'from-red-500 to-red-600' },
    { name: 'GitHub', icon: <SiGithub />, color: 'from-gray-700 to-gray-900' },
  ];

  const additionalSkills = [
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Sass', icon: <SiSass /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Netlify', icon: <SiNetlify /> },
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tecnologías <span className="text-purple-400">Que uso</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Herramientas que utilizo para desarrollar interfaces modernas y de alto rendimiento.
          </p>
        </div>

        {/* Main Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {mainTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${tech.color} text-white shadow-lg`}>
                  {tech.icon}
                </div>
              </div>
              <div className="text-white font-semibold text-sm">{tech.name}</div>
            </div>
          ))}
        </div>

        {/* Developer Animation */}
        <div className="flex justify-center mb-16">
          <div className="w-64 h-64 sm:w-80 sm:h-80">
            <Lottie animationData={developerAnimation} loop={true} />
          </div>
        </div>

        {/* Detailed Tech Categories */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-4"></div>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-2xl mr-4 p-2 rounded-lg bg-slate-700/50 group-hover:bg-purple-500/20 transition-all duration-300">
                          {tech.icon}
                        </div>
                        <span className="text-white font-semibold">{tech.name}</span>
                      </div>
                      <span className="text-purple-400 font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-pink-400 shadow-lg"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Herramientas adicionales</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm hover:bg-purple-600/30 transition-colors duration-200 cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;