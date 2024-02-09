import React, { useState } from "react";
import styles from "./Events.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Navbar from "../../Components/Navbar/Navbar";
import eventChess from "../../assets/events-images/events-chess.jpg";
import eventCricket from "../../assets/events-images/events-cricket.jpg";
import eventFootball from "../../assets/events-images/events-football.jpg";
import eventBasketball from "../../assets/events-images/events-basketball.webp";
import eventAtheletics from "../../assets/events-images/events-atheletics.jpg";
import eventTT from "../../assets/events-images/events-tt.jpg";
import eventVolleyball from "../../assets/events-images/events-volleyball.jpg";
import eventBadminton from "../../assets/events-images/events-badminton.jpg";
import eventTennis from "../../assets/events-images/events-tennis.jpg";

//Events data
const data = [
  {
    name: "Chess",
    src: eventChess,
    description:
      "Chess blitz is a fast-paced and intense variant of chess where players are allotted a very limited amount of time, typically ranging from three to five minutes per side for the entire game",
    rulebookSrc:
      "https://drive.google.com/file/d/1BHJnizi4IEAj0ENZM-wUE2izxyREE3hY/view?usp=share_link",
  },
  {
    name: "Cricket",
    src: eventCricket,
    description:
      "Cricket is a bat-and-ball sport played between two teams, involving batting, bowling, and fielding. The objective is to score runs by hitting the ball and dismiss opponents to secure victory.",
    rulebookSrc:
      "https://drive.google.com/file/d/1JJs3Y2S7CLatlAd_hCo5QH53pIC3bxdJ/view?usp=share_link",
  },
  {
    name: "Football",
    src: eventFootball,
    description:
      "Football is a team sport played between two sides aiming to score goals by getting a ball into the opposing team's net. It involves skillful ball control, strategic plays, and teamwork",
    rulebookSrc:
      "https://drive.google.com/file/d/1AtgYekWPTPQFaXihbDk76ltX5jQdAo8J/view?usp=share_link",
  },
  {
    name: "Basketball",
    src: eventBasketball,
    description:
      "Basketball is a fast-paced team sport played on a rectangular court, where teams aim to score points by shooting a ball through the opponent's hoop. Dribbling, passing, and strategic plays are integral to the game.",
    rulebookSrc:
      "https://drive.google.com/file/d/1Vtzco4PpCIdaz4xvjfZWAv6HsgOVsvBH/view?usp=share_link",
  },
  {
    name: "Atheletics",
    src: eventAtheletics,
    description:
      "Athletics is a broad category of sporting events that includes track and field disciplines such as running, jumping, and throwing. Athletes showcase their physical prowess, speed, and strength in a variety of competitions.",
    rulebookSrc:
      "https://drive.google.com/file/d/17XiPomyCSGmnK_CpsIKvuF1lKkgKOVcF/view?usp=share_link",
  },
  {
    name: "Table Tennis",
    src: eventTT,
    description:
      "Table tennis, or ping pong, is an exhilarating indoor sport. Players use paddles to swiftly maneuver a lightweight ball over a rectangular table, separated by a net. Quick reflexes and strategic play characterize this dynamic game.",
    rulebookSrc:
      "https://drive.google.com/file/d/1S7MzgDz5bbEL6JNOsB9K-UTExmAuSOoH/view?usp=share_link",
  },
  {
    name: "Volleyball",
    src: eventVolleyball,
    description:
      "Volleyball is a dynamic team sport played on a rectangular court divided by a net. Teams of six players score points by sending the ball over the net into the opponent's court, demanding quick reflexes and strategic plays.",
    rulebookSrc:
      "https://drive.google.com/file/d/1DXs4LX_bmnXpFC6k8YlaP5Mz9IBlrd_S/view?usp=share_link",
  },
  {
    name: "Badminton",
    src: eventBadminton,
    description:
      "Badminton is a fast-paced racquet sport played on a rectangular court divided by a net. Players or teams aim to score points by hitting a shuttlecock back and forth over the net.",
    rulebookSrc:
      "https://drive.google.com/file/d/1lRVYrIE4-xRSZyD_v7WcCACxZNwGx3_k/view?usp=share_link",
  },
  {
    name: "Tennis",
    src: eventTennis,
    description:
      "Athletics is a broad category of sporting events that includes track and field disciplines such as running, jumping, and throwing. Athletes showcase their physical prowess, speed, and strength in a variety of competitions.",
    rulebookSrc:
      "https://drive.google.com/file/d/1kCxMk_4b6_6fuEx3umPg-m1IkmDJs1Gl/view?usp=share_link",
  },
];

const Events = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  //style objects
  //arrow button styles
  const buttonStyles = {
    color: "#C7D8EB",
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
    borderRight: "10px solid #C7D8EB",
    borderBottom: "10px solid transparent",
    borderTop: "10px solid transparent",
    left: 0,
  };

  const rightArrow = {
    ...arrowStyles,
    borderLeft: "10px solid #C7D8EB",
    borderBottom: "10px solid transparent",
    borderTop: "10px solid transparent",
    right: 0,
  };

  //Image styles
  const largeImage = {
    borderRadius: "5%",
    transition: " width 0.5s ease, height 0.2s ease",
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
                450: {
                  width: "90%",
                  perPage: 1,
                  arrows: false,
                  height: "22rem",
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
              
                <button className={styles.registerButton}>
                <a
              
              href={data[centerIndex].rulebookSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
                  Rulebook
                  </a></button>
              
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
      </div>
    </>
  );
};

export default Events;
