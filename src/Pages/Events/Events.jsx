import React, { Fragment, useState } from "react";
import styles from "./Events.module.css";
import sampleImg from "../../assets/urja_logo_black.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import Navbar from "../../Components/Navbar/Navbar";

//Events data
const data = [
  {
    name: "event1",
    src: sampleImg,
    description: "this is event1",
  },
  {
    name: "event2",
    src: sampleImg,
    description: "this is event2",
  },
  {
    name: "event3",
    src: sampleImg,
    description: "this is event3",
  },
  {
    name: "event4",
    src: sampleImg,
    description: "this is event4",
  },
  {
    name: "event5",
    src: sampleImg,
    description: "this is event5",
  },
];

const Events = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  //style objects
  //arrow button styles
  const buttonStyles = {
    color: "#FCE502",
    backgroundColor: "transparent",
    position: "absolute",
    justifyItem: "center",
    border: "none",
    top: "30%",
  };

  const leftButtonStyles = {
    ...buttonStyles,
    left: "32%",
  };
  const rightButtonStyles = {
    ...buttonStyles,
    right: "32%",
  };

  const arrowStyles = {
    width: 0,
    height: 0,
    position: "absolute",
  };

  const leftArrow = {
    ...arrowStyles,
    borderRight: "10px solid #FCE502",
    borderBottom: "10px solid transparent",
    borderTop: "10px solid transparent",
    left: 0,
  };

  const rightArrow = {
    ...arrowStyles,
    borderLeft: "10px solid #FCE502",
    borderBottom: "10px solid transparent",
    borderTop: "10px solid transparent",
    right: 0,
  };

  //Image styles
  const largeImage = {
    borderRadius: "5%",
    transition: " width 0.5s ease, height 0.5s ease",
  };
  const smallerImage = {
    borderRadius: "5%",
    opacity: "0.5",
    transform: "scale(0.8)",
    transition:
      "opacity 0.2s ease, width 0.2s ease, height 0.2s ease, margin 0.2s ease",
  };

  //progressBar styles
  const progressBarStyle = {
    width: `${(centerIndex * 100) / data.length}%`,
  };

  const updateCenterIndex = (splide) => {
    setCenterIndex(splide.index);
  };

  return (
    <Fragment>
      <Navbar></Navbar>
    <div className={styles["events-page"]}>
      {/* carousel */}
      <Splide
        hasTrack={false}
        options={{
          perPage: 3,
          pagination: false,
          height: "25rem",
          width: "90%",
          rewind: true,
          focus: "center",
          type: "loop",
          gap: "15%",
          breakpoints: {
            640: {
              width: "80%",
              perPage: 1,
              arrows: false,
            },
            767: {
              width: "100%",
              perPage: 2,
              arrows: false,
            },
          },
        }}
        onMoved={updateCenterIndex}
      >
        <SplideTrack>
          {data.map((slide, index) => (
            <SplideSlide key={index}>
              <img
                src={slide.src}
                alt={slide.name}
                style={index === centerIndex ? largeImage : smallerImage}
              />
              <span
                className={
                  index === centerIndex
                    ? styles["slide-name-large"]
                    : styles["slide-name-small"]
                }
              >
                {slide.name}
              </span>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* slide description */}
        <div className={styles["description"]}>
          <p>{data[centerIndex].description}</p>
        </div>

        {/* rulebook */}
        <div className={styles["rulebook"]}>
          <p>Rulebook</p>
        </div>

        {/* progress bar */}
        <div className={styles["my-slider-progress"]}>
          <div
            className={styles["my-slider-progress-bar"]}
            style={progressBarStyle}
          ></div>
        </div>

        {/* arrow buttons */}
        <div className="splide__arrows">
          <button
            className="splide__arrow splide__arrow--prev"
            style={leftButtonStyles}
          >
            <span style={leftArrow}></span>
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            style={rightButtonStyles}
          >
            <span style={rightArrow}></span>
          </button>
        </div>
      </Splide>
    </div>
    </Fragment>
  );
};

export default Events;
