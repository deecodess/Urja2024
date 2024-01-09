import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { GenerateSlides } from "./GenerateSlides";
import classes from "./Gallery.module.css";
import { Helmet } from "react-helmet";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const AutoplayExample = () => {
  const options = {
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "15rem",
    perPage: 3,
    perMove: 1,
    padding: "4rem",
  };

  return (
    <>
      <Helmet>
        <title>URJA | Gallery</title>
      </Helmet>
      <div
        style={{
          backgroundColor: "#171717",
          maxHeight: "-webkit-fit-content",
          padding: "1rem",
        }}
      >
        <div>
          <h1 className={classes.heading}>GALLERY</h1>
          <hr style={{ maxWidth: "25rem", backgroundColor: "#E8E8E8" }} />
          <h4
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "'Museo Sans Rounded', sans-serif",
              fontWeight: 400,
            }}
          >
            Experience the thrill and excitement of our sports fest through our
            stunning Photo Gallery. The Action Shots...
          </h4>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative", objectFit: "contain" }}>
              <SplideTrack>
                {GenerateSlides().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1050"
                    style={{
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "1.1rem",
                      objectFit: "fill",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        maxWidth: "80%",
                        margin: "0.8rem",
                        borderRadius: "1.1rem",
                        maxHeight: "20rem",
                      }}
                      loading="lazy"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>

            {/* <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div> */}

            {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
          </Splide>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative" }}>
              <SplideTrack>
                {GenerateSlides().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1250"
                    style={{
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "1.1rem",
                      objectFit: "fill",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        maxWidth: "80%",
                        margin: "0.8rem",
                        borderRadius: "1.1rem",
                        maxHeight: "20rem",
                      }}
                      loading="lazy"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>

            {/* <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div> */}

            {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
          </Splide>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative" }}>
              <SplideTrack>
                {GenerateSlides().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1150"
                    style={{
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "1.1rem",
                      objectFit: "fill",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        maxWidth: "80%",
                        margin: "0.8rem",
                        borderRadius: "1.1rem",
                        maxHeight: "20rem",
                      }}
                      loading="lazy"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>

            {/* <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div> */}

            {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
          </Splide>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative" }}>
              <SplideTrack>
                {GenerateSlides().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1350"
                    style={{
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "1.1rem",
                      objectFit: "fill",
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      style={{
                        maxWidth: "80%",
                        margin: "0.8rem",
                        borderRadius: "1.1rem",
                        maxHeight: "20rem",
                      }}
                      loading="lazy"
                    />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>

            {/* <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div> */}

            {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default AutoplayExample;
