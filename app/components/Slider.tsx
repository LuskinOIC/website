"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

interface Slide {
  title: string;
  buttonText: string;
}

interface SliderProps {
  slides: Slide[];
}

const LeftArrow = () => (
  <div className="hidden md:block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  </div>
);

// functional component
const RightArrow = () => (
  <div className="hidden md:block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </div>
);

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const wrappedSlides = [...slides, slides[0]];

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  const nextSlide = useCallback(() => {
    if (currentSlide >= wrappedSlides.length - 1) {
      setTransitionEnabled(false);
      setCurrentSlide(0);

      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentSlide(1);
      }, 50);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, wrappedSlides.length]);

  const prevSlide = () => {
    if (currentSlide === 0) {
      // Jump to the last slide (which is visually the appended first slide) without transition
      setTransitionEnabled(false);
      setCurrentSlide(wrappedSlides.length - 1);

      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentSlide(wrappedSlides.length - 2); // Move to the actual last slide
      }, 50);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide, nextSlide]);

  const slideOffset = -currentSlide * 100; // 100% for each slide
  const indicatorPosition =
    currentSlide === wrappedSlides.length - 1 ? 0 : currentSlide;

  return (
    <div className="relative w-full overflow-hidden" {...handlers}>
      <div
        className={`flex ${
          transitionEnabled
            ? "transition-transform duration-500 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(${slideOffset}%)` }}
      >
        {wrappedSlides.map((slide: any, index) => (
          <div key={index} className="w-full flex-shrink-0 text-center">
            {slide}
          </div>
        ))}
      </div>
      <div className="hidden md:flex h-full items-center justify-center py-6">
        <button aria-label="left arrow" onClick={prevSlide}>
          <LeftArrow />
        </button>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === indicatorPosition
                ? "bg-black border-2 border-black h-2 w-2 transition-opacity duration-500 ease-in-out motion-reduce:transition-none"
                : "bg-gray-300 border-2 border-black w-2 h-2 opacity-20"
            }`}
          ></span>
        ))}
        <button aria-label="Right arrow" onClick={nextSlide}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Slider;
