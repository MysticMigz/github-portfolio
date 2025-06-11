import { motion } from 'framer-motion';
import HeroVideo from './HeroVideo';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 cyber-glitch"
        >
          <span className="text-cyber-blue">SOFTWARE</span>
          <span className="text-cyber-pink">ENGINEER</span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
          style={{ textShadow: '0 0 8px rgba(255,255,255,0.5)' }}
        >
          Full-Stack Developer // Digital Artist // Cyberpunk Enthusiast
        </motion.p>

        {/* Small hero video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden border-2 border-cyber-blue/50"
        >
          <HeroVideo />
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-6"
        >
          <button className="cyber-button">
            View Projects
          </button>
          <button 
            className="cyber-button" 
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
    </section>
  );
};

export default Hero; 