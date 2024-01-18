import React, { useState } from "react";
import styles from "./Events.module.css";
import sampleImg from "../../assets/urja_logo_black.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

//Events data
const data = [
  {
    name: "event1",
    src: sampleImg,
<<<<<<< Updated upstream
    description: "this is event1",
=======
    description:
      "Chess blitz is a fast-paced and intense variant of chess where players are allotted a very limited amount of time, typically ranging from three to five minutes per side for the entire game",
>>>>>>> Stashed changes
  },
  {
    name: "event2",
    src: sampleImg,
<<<<<<< Updated upstream
    description: "this is event2",
=======
    description:
      "Cricket is a bat-and-ball sport played between two teams, involving batting, bowling, and fielding. The objective is to score runs by hitting the ball and dismiss opponents to secure victory.",
>>>>>>> Stashed changes
  },
  {
    name: "event3",
    src: sampleImg,
<<<<<<< Updated upstream
    description: "this is event3",
=======
    description:
      "Football is a team sport played between two sides aiming to score goals by getting a ball into the opposing team's net. It involves skillful ball control, strategic plays, and teamwork",
>>>>>>> Stashed changes
  },
  {
    name: "event4",
    src: sampleImg,
<<<<<<< Updated upstream
    description: "this is event4",
=======
    description:
      "Basketball is a fast-paced team sport played on a rectangular court, where teams aim to score points by shooting a ball through the opponent's hoop. Dribbling, passing, and strategic plays are integral to the game.",
>>>>>>> Stashed changes
  },
  {
    name: "event5",
    src: sampleImg,
<<<<<<< Updated upstream
    description: "this is event5",
=======
    description:
      "Athletics is a broad category of sporting events that includes track and field disciplines such as running, jumping, and throwing. Athletes showcase their physical prowess, speed, and strength in a variety of competitions.",
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    <>
      <div className={styles["container"]}>
        <Navbar />
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
      </div>
    </>
>>>>>>> Stashed changes
  );
};

export default Events;
