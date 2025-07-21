import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Card.css'; // Import your custom CSS file
import image1 from './../images/NEW.png';
import image2 from './../images/ind.png';
import ReactCardFlip from 'react-card-flip';

const ReactCardSlider = (props) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleFlip = (index) => {
    if (flippedIndices.includes(index)) {
      setFlippedIndices(flippedIndices.filter(i => i !== index));
    } else {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {props.slides && props.slides.map((slide, index) => {
          const isFlipped = flippedIndices.includes(index);
          return (
            <ReactCardFlip key={index} isFlipped={isFlipped} flipDirection="horizontal">
              <div className="slider-card" onClick={() => handleFlip(index)}>
                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                <p className="slider-card-title">{slide.title}</p>
                <p className="slider-card-description">{slide.description}</p>
               {slide.clickEvent ? (
  <button
    className="slider-card-button"
    onClick={(e) => {
      e.stopPropagation();
      slide.clickEvent();
    }}
  >
    RSVP
  </button>
) : (
  <button className="slider-card-button" onClick={(e) => e.stopPropagation()}>
    Coming Soon
  </button>
)}

              </div>
              <div className="card-back" onClick={() => handleFlip(index)}>
                <p>{slide.backContent}</p>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
    </div>
  );
};

const CardSliderComponent = () => {
  const sliderClick = () => {
    console.log('Card clicked');
  };

const slides = [
  {
    image: image1,
    title: "NEW STUDENT ORIENTATION",
    description: "JULY 18TH 2025",
    backContent: "More details about the orientation.",
    clickEvent: () => window.open('https://forms.gle/zwbGxtgXGqFcieEc8', '_blank') // ✅ add link here
  },
  {
    image: image2,
    title: "INDEPENDENCE DAY",
    description: "AUGUST 15TH 2025",
    backContent: "To be updated soon",
    // No clickEvent = “Coming Soon”
  }
];


  return (
    <section id="Card">
      <div className='textt-container'>
        <h2>UPCOMING EVENTS</h2>
      </div>
      <ReactCardSlider slides={slides} />
    </section>
  );
};

export default CardSliderComponent;
