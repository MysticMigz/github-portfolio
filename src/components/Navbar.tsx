import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cyber-dark/98 backdrop-blur-xl border-b-2 border-cyber-blue/60 shadow-2xl shadow-cyber-blue/30' 
          : 'bg-cyber-dark/90 backdrop-blur-lg border-b border-cyber-blue/40 shadow-lg shadow-cyber-blue/20'
      }`}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 via-transparent to-cyber-pink/5 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'h-20' : 'h-24'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <span className="relative text-cyber-blue text-4xl font-bold tracking-wider transition-all duration-300 group-hover:text-cyber-pink">
                MIGUEL<span className="text-cyber-pink group-hover:text-cyber-blue">.DEV</span>
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-white text-lg font-medium px-6 py-3 group overflow-hidden rounded-lg"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/0 via-cyber-blue/20 to-cyber-blue/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  
                  {/* Hover border effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyber-blue/50 rounded-lg transition-all duration-300"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-cyber-blue transition-colors duration-300">
                    {item.name}
                  </span>
                  
                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-pink group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-cyber-pink opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-cyber-blue opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="relative group px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/50"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <span className="relative z-10">Hire Me</span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative p-3 text-white hover:text-cyber-blue transition-colors duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-cyber-blue/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <svg 
              className="relative z-10 h-8 w-8 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={isOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 6h16M4 12h16M4 18h16" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-cyber-dark/98 border-t border-cyber-blue/30 backdrop-blur-md"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-lg text-white hover:text-cyber-blue hover:bg-cyber-blue/10 rounded-lg transition-all duration-300 border border-transparent hover:border-cyber-blue/30 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute left-0 top-0 w-1 h-0 bg-cyber-pink group-hover:h-full transition-all duration-300"></div>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="pt-4 border-t border-cyber-blue/20 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="block text-center py-3 w-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-bold rounded-lg hover:from-cyber-pink hover:to-cyber-yellow transition-all duration-500"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced glow effects */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-pink/30 to-transparent opacity-50"></div>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
      <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-cyber-pink to-transparent"></div>
    </motion.nav>
  );
};

export default Navbar; 