import React, { useState, useEffect, useRef } from "react";
import "./home.css";

const images = [
  "homeslide1.png",
  "homeslide2.png",
  "homeslide3.png",
  "homeslide4.png",
  "homeslide5.png",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4);
  const sliderRef = useRef(null);
  const totalImages = images.length;

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 600) {
        setVisibleImages(1);
      } else if (window.innerWidth <= 900) {
        setVisibleImages(2);
      } else if (window.innerWidth <= 1200) {
        setVisibleImages(3);
      } else {
        setVisibleImages(4);
      }
    };
    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= totalImages) {
      setTimeout(() => {
        setIndex(0);
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(0px)`;
      }, 1000);
    } else {
      sliderRef.current.style.transition = "transform 1s ease-in-out";
      sliderRef.current.style.transform = `translateX(${
        -index * (100 / visibleImages)
      }%)`;
    }
  }, [index, visibleImages]);

  return (
    <div className="slider">
      <div className="slider-container" ref={sliderRef}>
        {[...images, ...images.slice(0, visibleImages)].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx + 1}`}
            className="slider-image"
            style={{ height: "30px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
