import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About Us', sectionId: 'about' },
    { name: 'Our Process', sectionId: 'process' },
    { name: 'Contact Us', sectionId: 'contact' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`absolute inset-0 backdrop-blur-md bg-black/30 shadow-lg transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-bold text-white"
          >
            <img 
              src="https://res.cloudinary.com/dppivxwbv/image/upload/v1737270053/agency_s2nwp1.png" 
              className='w-[120px]' 
              alt="logo" 
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 cursor-pointer ${
                  location.pathname === `/#${link.sectionId}` ? 'text-blue-400' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
              <a href="https://app.lemcal.com/@aarzenacquisition/demo-call" target="_blank">Book Call</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg mt-2 py-4 rounded-lg shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className={`block w-full text-left px-6 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === `/#${link.sectionId}` ? 'text-blue-400' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="px-6 pt-2 pb-4">
              <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                <a href="https://app.lemcal.com/@aarzenacquisition/demo-call" target="_blank">Book Call</a>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;