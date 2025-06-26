import React from 'react';
import { Code, Wrench, BookHeart, Database, BookCheck, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Desarrollo web',
      description: 'Aplicaciones web personalizadas construidas con tecnologías modernas y mejores prácticas.',
      features: ['React/Angular', 'TypeScript/JavaScript', 'Diseño Responsivo'],
    },
    {
      icon: <Wrench />,
      title: 'Mantenimiento',
      description: 'Corrección de errores, mejoras de rendimiento y actualización de dependencias.',
      features: ['Refactorización de código', 'Optimización de rendimiento', 'Actualización de librerías y frameworks'],
    },
    {
      icon: <BookHeart />,
      title: 'Componentes Reutilizables',
      description: 'Desarrollo de librerías de componentes reutilizables para mejorar la escalabilidad, consistencia y eficiencia en proyectos frontend.',
      features: ['Diseño con Storybook y documentación clara', 'Desacoplamiento y testeo de componentes', 'Gestión de paquetes con npm/yarn/pnpm'
]
    },
    {
      icon: <Database />,
      title: 'Consumo de APIs',
      description: 'Integración eficiente para conectar tu aplicación con servicios externos o internos.',
      features: [
        'Consumo de APIs con Axios y async/await',
        'Autenticación',
        'Integración con APIs REST y GraphQL'
      ],
    },
    {
      icon: <BookCheck />,
      title: 'Testeo',
      description: 'Implementación de pruebas unitarias y de integración',
      features: ['Jest', 'Supertest'],
    },
    {
      icon: <Zap />,
      title: 'Optimización de Rendimiento',
      description: 'Acelera tus aplicaciones con auditorías de rendimiento y técnicas de optimización.',
      features: ['Optimización de código', 'SEO', 'Monitoreo de rendimiento']
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-cyan-400">Servicios</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ofrezco soluciones digitales enfocadas al desarrollo frontend para dar vida a tus ideas con interfaces modernas, funcionales y atractivas.
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