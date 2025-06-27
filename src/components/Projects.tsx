import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plataforma E-Commerce',
      description: 'Solución moderna de comercio electrónico con integración de pagos, gestión de inventario y panel de administración.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'App de Gestión de Tareas',
      description: 'Aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funciones de colaboración en equipo.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Firebase', 'TypeScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Dashboard del Clima',
      description: 'Hermosa aplicación del clima con pronósticos detallados y mapas interactivos.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Weather API', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Analíticas de Redes Sociales',
      description: 'Dashboard integral de analíticas para el seguimiento del rendimiento en redes sociales.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Python', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos <span className="text-purple-400">Recientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aquí tienes algunos de mis proyectos recientes que muestran mis habilidades y creatividad
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <Eye size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-full transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Ver Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Código Fuente
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    <Eye size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;