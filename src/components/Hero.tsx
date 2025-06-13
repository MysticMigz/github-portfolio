import { motion } from 'framer-motion';
import HeroVideo from './HeroVideo';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-safe">
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 cyber-glitch tracking-tight leading-none"
        >
          <span className="text-cyber-blue block sm:inline">SOFTWARE</span>
          <span className="text-cyber-pink block sm:inline"> ENGINEER</span>
          <span className="text-cyber-purple block text-3xl sm:text-5xl md:text-6xl mt-2 sm:mt-0">/ DEVELOPER</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          style={{ textShadow: '0 0 8px rgba(255,255,255,0.5)' }}
        >
          Full-Stack Developer // Digital Artist // Digital Architect
        </motion.p>

        {/* Small hero video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden border-2 border-cyber-blue/50 shadow-lg shadow-cyber-blue/20"
        >
          <div className="aspect-video">
            <HeroVideo />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button className="cyber-button w-full sm:w-auto min-w-[200px]">
            View Projects
          </button>
          <button 
            className="cyber-button w-full sm:w-auto min-w-[200px]"
            style={{
              borderColor: '#ff00ff',
              color: '#ff00ff',
              boxShadow: '0 0 10px #ff00ff',
            }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Top decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-50"></div>
    </section>
  );
};

export default Hero; 