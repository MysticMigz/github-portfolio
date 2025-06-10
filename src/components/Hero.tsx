import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      
      {/* Animated circles with reduced opacity */}
      <motion.div
        className="absolute w-96 h-96 bg-cyber-blue/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          left: '10%',
          top: '20%',
        }}
      />
      
      <motion.div
        className="absolute w-96 h-96 bg-cyber-pink/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          right: '10%',
          bottom: '20%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 cyber-glitch"
        >
          <span className="text-cyber-blue">CYBER</span>
          <span className="text-cyber-pink">PUNK</span>
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