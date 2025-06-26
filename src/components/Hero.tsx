import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-purple-400 text-lg md:text-xl font-medium">Hi This Is</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                DRISCHDAAN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer & UI/UX Designer crafting digital experiences that make a difference
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Mail size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;