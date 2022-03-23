import React, { useState, useCallback, useEffect } from "react";
import state from "../data/state.json";

export const Carousel = () => {
  const [totalImages] = useState(state.carouselImages.length);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [loopReference, setLoopReference] = useState(null);

  const getPrevIdx = useCallback((idx) => idx - 1 < 0 ? totalImages - 1 : idx - 1);
  const getNextIdx = useCallback((idx) => idx + 1 === totalImages ? 0 : idx + 1);


    useEffect(() => {
      setLoopReference(setInterval(() => setSelectedImageIdx(getNextIdx), 5000));
      return () => clearInterval(loopReference);
    }, []);

  return (
    <div className="carousel-wrapper">
      {state.carouselImages.map((carouselImage, carouselImageIdx) => (
        <img
          className={`carousel-image ${
            carouselImageIdx === selectedImageIdx ? "current" : ""
          }${carouselImageIdx === getPrevIdx(selectedImageIdx) ? "prev" : ""}${
            carouselImageIdx === getNextIdx(selectedImageIdx) ? "next" : ""
          }`}
          src={carouselImage.src}
          alt=""
          key={carouselImageIdx}
        />
      ))}
      <div className="button left" onClick={() => setSelectedImageIdx(getPrevIdx)}></div>
      <div className="button right" onClick={() => setSelectedImageIdx(getNextIdx)}></div>
    </div>
  );
};
