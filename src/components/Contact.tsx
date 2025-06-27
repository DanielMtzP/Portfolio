import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configuración de EmailJS
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message_subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_4eqi1jc',
        'template_0gehd2r',
        templateParams,
        'xlwgklGwU67WWtb9I'
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Correo',
      details: 'danien888@hotmail.com',
      link: 'mailto:danien888@hotmail.com'
    },
    {
      icon: <Phone />,
      title: 'Teléfono - WhatsApp',
      details: '+52 (55) 1906-1300',
      link: 'https://wa.me/+525519061300'
    },
    {
      icon: <MapPin />,
      title: 'Ubicación',
      details: 'CDMX - Miguel Hidalgo, México',
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trabajemos <span className="text-cyan-400">Juntos</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            ¿Listo para comenzar tu próximo proyecto? Hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Pongámonos en Contacto</h3>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8">
                Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. 
                Ya sea que tengas una pregunta o simplemente quieras saludar, ¡estaré feliz de responderte!
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link} target='_blank'
                  className="flex items-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl sm:rounded-2xl hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-cyan-400 mr-4 sm:mr-6 group-hover:text-cyan-300 transition-colors duration-300">
                    {React.cloneElement(info.icon, { size: 24 })}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{info.title}</div>
                    <div className="text-gray-300">{info.details}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">¿Listo para Comenzar tu Proyecto?</h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Hablemos sobre los requisitos de tu proyecto y cómo puedo ayudarte a lograr tus objetivos.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                Agendar una Llamada
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Enviar Mensaje</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                <p className="text-gray-300">Gracias por tu mensaje. ¡Te responderé pronto!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                      placeholder="Tu Nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                    placeholder="Asunto del Proyecto"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className="mr-2" size={20} />
                  {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;