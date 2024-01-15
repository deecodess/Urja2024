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
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
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
      640: {
        perPage: 1,
        width: "100%", // Set the width for screens with width less than 640px
        height: "10rem", // Set the height for screens with width less than 640px
      },
      768: {
        perPage: 2,
        width: "100%", // Set the width for screens with width between 640px and 767px
        height: "12rem", // Set the height for screens with width between 640px and 767px
      },
      1024: {
        perPage: 3,
        width: "100%", // Set the width for screens with width between 768px and 1023px
        height: "15rem", // Set the height for screens with width between 768px and 1023px
      },
      1440: {
        perPage: 4,
        width: "100%", // Set the width for screens with width between 1024px and 1439px
        height: "18rem", // Set the height for screens with width between 1024px and 1439px
      },
      2560: {
        perPage: 4,
        width: "100%", // Set the width for screens with width between 1024px and 1439px
        height: "18rem", // Set the height for screens with width between 1024px and 1439px
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>URJA | Gallery</title>
      </Helmet>
      <div className={classes.container}>
        <Navbar></Navbar>
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
              height: "100vh", // Ensure the container takes the full height of the viewport
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
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "contain",
                      maxWidth: "80vw",
                      maxHeight: "60vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%", // Ensure the container takes the full height
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          maxWidth: "80%", // Adjust the maximum width as needed
                          maxHeight: "60vh", // Adjust the maximum height as needed
                          width: "auto", // Ensure the image is responsive
                          height: "auto", // Ensure the image is responsive
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
              height: "100vh", // Ensure the container takes the full height of the viewport
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
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "contain",
                      maxWidth: "80vw",
                      maxHeight: "60vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%", // Ensure the container takes the full height
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          maxWidth: "80%", // Adjust the maximum width as needed
                          maxHeight: "60vh", // Adjust the maximum height as needed
                          width: "auto", // Ensure the image is responsive
                          height: "auto", // Ensure the image is responsive
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
              height: "100vh", // Ensure the container takes the full height of the viewport
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
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "contain",
                      maxWidth: "80vw",
                      maxHeight: "60vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%", // Ensure the container takes the full height
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          maxWidth: "80%", // Adjust the maximum width as needed
                          maxHeight: "60vh", // Adjust the maximum height as needed
                          width: "auto", // Ensure the image is responsive
                          height: "auto", // Ensure the image is responsive
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
              height: "100vh", // Ensure the container takes the full height of the viewport
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
                      backgroundColor: "#232323",
                      textAlign: "center",
                      borderRadius: "8px",
                      objectFit: "contain",
                      maxWidth: "80vw",
                      maxHeight: "60vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%", // Ensure the container takes the full height
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{
                          maxWidth: "80%", // Adjust the maximum width as needed
                          maxHeight: "60vh", // Adjust the maximum height as needed
                          width: "auto", // Ensure the image is responsive
                          height: "auto", // Ensure the image is responsive
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
