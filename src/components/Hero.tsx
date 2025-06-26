import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import animationPc from '../lotties/animationPc.json'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <p className="text-purple-400 text-lg md:text-xl font-medium">Hola, soy</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Daniel Martínez
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Front end Developer construyendo experiencias digitales que hacen la diferencia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Lottie animationData={animationPc} loop={true} />
            <a href='https://1drv.ms/b/c/d59d555204934f1c/EeGwyeBo2KpOqssiwhpkFq4BV-Ujx-eRMqAnfqS2hgzGOQ?e=1zSEBm' target="_blank">
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto">
                Download CV
              </button>
              <div className="flex justify-center bottom-8 left-1/2 mt-6 animate-bounce">
                <ArrowDown className="text-purple-400" size={52} />
              </div>
            </a>
          </div>

          <div className="flex justify-center space-x-6 pb-4">
            <a href="https://github.com/DanielMtzP?tab=repositories" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Github size={48} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-martínez-6520a2242" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Linkedin size={48} />
            </a>
            <a href="mailto:danien888@hotmail.com" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Mail size={48} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;