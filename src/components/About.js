import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function AboutSection() {
  const images = [
    "/images/coffeehour/IMG-20241021-WA0005.jpg",
    "/images/holi.jpeg",
     "/images/g13.jpg",
     "/images/g11.jpg",
    "/images/g6.jpg",
    "/images/group2.jpg",
     "/images/g10.jpeg",
    "/images/group3.jpg",
 "/images/g9.jpeg",
  "/images/g12.jpg",
    
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, [images.length]);

  // Manual navigation
  const goLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <h3 className="about-heading">Welcome to IGSA’s Homepage!</h3>
        <div className="divider"></div>

        <div className="about-content">
          <p style={{ textAlign: 'center', color: '#333' }}>
            The IGSA 2025 - 2026 Board is working hard to make the next year memorable and exciting for the Indian-American community. Take a look around our website in order to learn what events we have coming up, and how to be more involved in the community!
          </p>

          {/* Image Carousel */}
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <img
              src={images[currentIndex]}
              alt="IGSA Event"
              style={{ width: '100%', borderRadius: '8px', transition: 'opacity 0.5s ease-in-out' }}
            />
            <MdChevronLeft
              size={40}
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#333',
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
              }}
              onClick={goLeft}
            />
            <MdChevronRight
              size={40}
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                color: '#333',
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
              }}
              onClick={goRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
