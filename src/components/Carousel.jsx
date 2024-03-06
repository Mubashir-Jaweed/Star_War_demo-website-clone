import React, { useEffect, useState } from "react";
import characters from "../assets/characters.png";
import planets from "../assets/planets.png";
import starships from "../assets/starships.png";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [characters,  starships, planets];

  const nextSlide = () => {
    if(currentSlide == images.length -1){
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };
useEffect(() => {
  const intervalId = setInterval(nextSlide, 3000);
  return () => clearInterval(intervalId);
}, [currentSlide]); 
  return (
    <div className="data-carousel">
      <div className="carousel-slide">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      {/* <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button> */}
    </div>
  );
};

export default Carousel;
