import { useEffect, useRef } from 'react';

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay effects */}
      <div className="absolute inset-0 bg-cyber-dark/20 rounded-lg" /> {/* Dark overlay */}
      
      {/* Cyberpunk grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-20 rounded-lg" />

      {/* Glitch lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-pink/3 to-transparent opacity-30 rounded-lg" />
      
      {/* Color tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/20 via-transparent to-cyber-blue/20 rounded-lg" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg border-2 border-cyber-blue/50 animate-pulse" />
    </div>
  );
};

export default HeroVideo; 