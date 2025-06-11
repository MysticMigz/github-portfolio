import { useEffect, useRef } from 'react';

const GlobVideo = () => {
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
        <source src="/videos/glob.mp4" type="video/mp4" />
      </video>

      {/* Overlay effects */}
      <div className="absolute inset-0 bg-cyber-dark/30 rounded-lg" /> {/* Dark overlay */}
      
      {/* Cyberpunk grid effect */}
      <div className="absolute inset-0 cyber-grid opacity-15 rounded-lg" />

      {/* Glitch lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/3 to-transparent opacity-30 rounded-lg" />
      
      {/* Color tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/20 via-transparent to-cyber-purple/20 rounded-lg" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg border-2 border-cyber-purple/50 animate-pulse" />
    </div>
  );
};

export default GlobVideo; 