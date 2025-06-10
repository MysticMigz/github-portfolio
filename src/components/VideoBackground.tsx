import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </video>

      {/* Overlay effects for the entire page */}
      <div className="absolute inset-0 bg-cyber-dark/50" /> {/* Dark overlay */}
      
      {/* Cyberpunk grid effect */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10" />

      {/* Glitch lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-blue/3 to-transparent opacity-30" />
      
      {/* Color tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/10 via-transparent to-cyber-blue/10" />
      
      {/* Additional depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-dark/30" />
    </div>
  );
};

export default VideoBackground; 