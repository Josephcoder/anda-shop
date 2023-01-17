import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { slideImages } from "../constants";

let count = 0;
let slideInterval;
const TopSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef: { current: any | null } = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % slideImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = slideImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-5 aspect-h-2">
        <img
          src={slideImages[currentIndex].url}
          alt={slideImages[currentIndex].text}
        />
        <div className="absolute w-full flex justify-center items-center bg-opacity-75 md:bg-opacity-50">
          <div className="w-[500px] md:mt-36 lg:mt-36 text-center prose sm:prose-sm md:prose-lg lg:prose-xl">
            <h1 className="text-orange font-extrabold uppercase">
              {slideImages[currentIndex].text}
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex sm:px-16 md:px-28  justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
};

export default TopSlide;
