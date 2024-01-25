import React from "react";
import Main from "../../assets/Group 19.png";
import Lion_img from "../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png";
import styles from "./Hero.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import bg2 from "../../assets/diyaAsset 1 1.png";
import background from "../../assets/background.png"
import About from "../About/About.jsx";
import Events from "../Events/Events.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Register from "../Register/Register.jsx";
import Contact from "../Contact/Contact.jsx";
import urja_aftermovie_final from "../../assets/urja_aftermovie_final.mp4";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.background}>
          <img src={background} className={styles.background} alt="" />
        </div>
        <div className={styles.bg1}>
          {/* <img src={bg1} alt="" /> */}
          <img src={bg2} className={styles.bg2} alt="" />
        </div>
        {/* <img src={Urja_logo} alt="URJA LOGO" className={styles.logo} /> */}

        <div className={styles.annualTechFest}>
          <h1>ANNUAL SPORTS FEST OF THAPAR INSTITUTE</h1>
        </div>
        <img src={Main} alt="" className={styles.mainImage} />
        <h1 className={styles.mobileonlytext}>THE ROAR OF EMINENCE</h1>
        <div className={styles.roarSection}>
          <h1 className={styles.firstText}> THE ROAR</h1>
          <img src={Lion_img} alt="" className={styles.lionImage} />
          <h1 className={styles.secondText}> OF EMINENCE</h1>
        </div>
        <div className={styles.videoheading}>
          <h1>URJA GLIMPSE</h1>
          <video className={styles.video} controls>
            <source src={urja_aftermovie_final} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.mobileviewonly}>
        <About />
        <Events />
        <Gallery />
        <Register />
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
