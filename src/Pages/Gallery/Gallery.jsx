import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
  GenerateSlides1,
  GenerateSlides2,
  GenerateSlides3,
  GenerateSlides4,
} from "./GenerateSlides";
import classes from "./Gallery.module.css";
import { Helmet } from "react-helmet";
import "@splidejs/react-splide/css/sea-green";
import Navbar from "../../Components/Navbar/Navbar";

const AutoplayExample = () => {
  const options = {
    type: "loop",
    gap: "2rem",
    autoplay: false,
    pauseOnHover: false,
    resetProgress: false,
    pagination: false,
    padding: "4rem",
    drag: true,
    breakpoints: {
      450: {
        perPage: 1,
        width: "100%",
        height: "10rem",
      },
      640: {
        perPage: 1,
        width: "100%",
        height: "10rem",
      },
      768: {
        perPage: 2,
        width: "100%",
        height: "8rem",
      },
      1024: {
        perPage: 3,
        width: "100%",
        height: "13rem",
      },
      1440: {
        perPage: 4,
        width: "100%",
        height: "13rem",
      },
      2560: {
        perPage: 4,
        width: "100%",
        height: "13rem",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>URJA | Gallery</title>
      </Helmet>
      <div className={classes.container}>
        <Navbar />
        <div className={classes.galleryContainer}>
          <div style={{ position: "relative" }}>
            <div className={classes.bgtext}></div>
            <h1 className={classes.heading}>GALLERY</h1>
            <hr
              style={{
                maxWidth: "28rem",
                zIndex: 2,
                backgroundColor: "#E8E8E8",
              }}
            />
          </div>

          <h4 className={classes.customh4}>
            Experience the thrill and excitement of our sports fest through our
            stunning Photo Gallery. The Action Shots...
          </h4>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                objectFit: "contain",
                textAlign: "center",
              }}
            >
              <SplideTrack>
                {GenerateSlides1().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1050"
                    style={{
                      // backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "cover",
                      // objectFit: "contain",
                      // maxWidth: "80vw",
                      // maxHeight: "60vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "2px",
                        }}
                        loading="lazy"
                      />
                    </div>
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                objectFit: "contain",
                textAlign: "center",
              }}
            >
              <SplideTrack>
                {GenerateSlides2().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1050"
                    style={{
                      // backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "2px",
                        }}
                        loading="lazy"
                      />
                    </div>
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                objectFit: "contain",
                textAlign: "center",
              }}
            >
              <SplideTrack>
                {GenerateSlides3().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1050"
                    style={{
                      // backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "2px",
                        }}
                        loading="lazy"
                      />
                    </div>
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                objectFit: "contain",
                textAlign: "center",
              }}
            >
              <SplideTrack>
                {GenerateSlides4().map((slide) => (
                  <SplideSlide
                    key={slide.src}
                    data-splide-interval="1050"
                    style={{
                      // backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "2px",
                        }}
                        loading="lazy"
                      />
                    </div>
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
