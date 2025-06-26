import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre mi' },
    { href: '#services', label: 'Servicios' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        'bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-6 pb-2 min-w-0">
          <div className="text-xl sm:text-2xl font-bold text-white flex-shrink-0">
            <a  href='#home'>
              <span className="text-cyan-500">DN</span>Mtz
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-50 hover:text-purple-400 transition-colors duration-200 text-xl lg:text-2xl font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 flex-shrink-0 -mr-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-purple-500/20 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col text-center py-4">
            {navItems.map((item, index) => (
              <div key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-lg font-medium py-3 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mx-8"></div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;