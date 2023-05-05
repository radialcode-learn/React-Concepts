import React, { useState, useEffect } from "react";

const Accordion = ({ title, content, index, activeIndex, onClick }) => {
  const isActive = index === activeIndex;
  const accordionClass = isActive ? "accordion active" : "accordion";

  return (
    // accordion data shown here ..
    <div className={accordionClass}>
      <div className="accordion__title" onClick={() => onClick(index)}>
        {title}
      </div>
      {isActive && <div className="accordion__content">{content}</div>}
    </div>
  );
};

const SliderWithAccordion = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // data of the slider ..
  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];
  // to open the accordion ..
  const handleClickAccordion = (index) => {
    setActiveSlide(index);
  };
  // for autoplay of slider with accordion ..
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide) => (activeSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const sliderClass = `slider slide-${activeSlide + 1}`;

  return (
    // slider data shown here
    <div className="slider-with-accordion">
      <div className={sliderClass}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${activeSlide === index ? "active" : ""}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      {/* accordion content */}
      <div className="accordion-container">
        <Accordion
          title="Accordion 1"
          content="Accordion content 1"
          index={0}
          activeIndex={activeSlide}
          onClick={handleClickAccordion}
        />
        <Accordion
          title="Accordion 2"
          content="Accordion content 2"
          index={1}
          activeIndex={activeSlide}
          onClick={handleClickAccordion}
        />
        <Accordion
          title="Accordion 3"
          content="Accordion content 3"
          index={2}
          activeIndex={activeSlide}
          onClick={handleClickAccordion}
        />
      </div>
    </div>
  );
};

export default SliderWithAccordion;
