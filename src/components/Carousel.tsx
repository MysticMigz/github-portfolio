import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const Carousel = ({ images, autoPlayInterval = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, handleNext, isPaused]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isModalOpen) return;
    
    switch (e.key) {
      case 'Escape':
        setIsModalOpen(false);
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
    }
  }, [isModalOpen, handlePrevious, handleNext]);

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleKeyDown]);

  return (
    <>
      <div 
        className="relative w-full aspect-video max-h-[400px] group touch-pan-y cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={images[currentIndex]}
              alt={`Project screenshot ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain rounded-lg select-none"
              priority
              draggable={false}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/20 rounded-lg pointer-events-none" />
            
            {/* Click to enlarge indicator */}
            <div className="absolute top-2 left-2 bg-cyber-dark/80 px-2 py-1 rounded-full text-xs text-cyber-blue border border-cyber-blue/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to enlarge
            </div>
            
            {/* Loading indicator */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-cyber-blue/30 w-full">
              <div 
                className="h-full bg-cyber-blue transition-all duration-300"
                style={{ 
                  width: `${(currentIndex / (images.length - 1)) * 100}%`,
                  boxShadow: '0 0 8px var(--color-cyber-blue)'
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons - hidden on touch devices */}
        <div className="hidden sm:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-cyber-dark/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyber-dark border border-cyber-blue z-10 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyber-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyber-dark/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cyber-dark border border-cyber-blue z-10 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyber-blue">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Touch indicators - only visible on touch devices */}
        <div className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none text-cyber-blue/50 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        {/* Dots indicator */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyber-blue w-4 shadow-sm shadow-cyber-blue'
                  : 'bg-cyber-gray hover:bg-cyber-blue/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Current image indicator */}
        <div className="absolute top-2 right-2 bg-cyber-dark/80 px-2 py-1 rounded-full text-xs text-cyber-blue border border-cyber-blue/30 backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Full-size Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-cyber-dark/80 p-3 rounded-full border border-cyber-blue/50 text-cyber-blue hover:bg-cyber-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-cyber-dark/80 p-3 rounded-full border border-cyber-blue/50 text-cyber-blue hover:bg-cyber-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-cyber-dark/80 p-3 rounded-full border border-cyber-blue/50 text-cyber-blue hover:bg-cyber-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={images[currentIndex]}
                  alt={`Project screenshot ${currentIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                  draggable={false}
                  quality={100}
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cyber-dark/80 px-4 py-2 rounded-full text-sm text-cyber-blue border border-cyber-blue/30 backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Keyboard shortcuts hint */}
              <div className="absolute bottom-4 right-4 bg-cyber-dark/80 px-3 py-2 rounded-lg text-xs text-cyber-blue/70 border border-cyber-blue/30 backdrop-blur-sm">
                <div>← → to navigate</div>
                <div>ESC to close</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Carousel; 