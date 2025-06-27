import React from 'react';
import { User, Award, Coffee, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award />, label: 'Certificaciones', value: '5' },
    { icon: <Clock />, label: 'Años De Experiencia', value: '2.5' },
    { icon: <User />, label: 'Contribuciones', value: '+20' },
    { icon: <Coffee />, label: 'Tazas De Café', value: '1000+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-cyan-400">Mi</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Apasionado desarrollador front-end con experiencia en la creación de interfaces de usuario inutitivas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-6 h-full">
            <p className="text-gray-300 text-lg leading-relaxed">
              Con más de 2 años de experiencia creando aplicaciones modernas, funcionales y fáciles de usar. Me especializo en tecnologías web modernas y me encanta convertir ideas en diseños simples y atractivos.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              En mi tiempo libre me gusta explorar nuevas tecnologías, ver noticias para actualizarme con con las novedades del desarrollo y disfrutando de un buen café.
            </p>

            <div className="space-y-4">

            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
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