import React, { useEffect } from "react";
import Main from "../../assets/Group 19.png";
// import Lion_img from "../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png";
import styles from "./Hero.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import bg2 from "../../assets/diyaAsset 1 1.png";
// import background from "../../assets/background.png";
import background2 from "../../assets/background2.jpg";
// import background3 from "../../assets/background3.jpg"
import About from "../About/About.jsx";
import Events from "../Events/Events.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Contact from "../Contact/Contact.jsx";
import Register from "../Register/Register.jsx";
import urja_aftermovie_final from "../../assets/urja_aftermovie_final.mp4";
// import logo from "../../assets/logo.jpeg";
// import phone from "../../assets/phone.png";
import New_Logo from "../../assets/new_lion.png";
// import download from "./../../assets/download.png";
import download from "./../../assets/downloadapp.png";
import app from "./../../assets/app.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Hero = () => {
  useEffect (() => {
    Aos.init ({
      duration: 1500});
  }, []);
  return (
    <div className={styles.landingContainer}>
      <Navbar />
      <div className={styles.heroContainer} >
        <img src={background2} className={styles.background} alt="" />

          <h1 className={styles.annualTechFest}data-aos="fade-up">Annual Sports Fest Of Thapar Institute of Engineering and Technology</h1>
          <h1 className={styles.annualTechFestdate}data-aos="fade-up">16-18 February 2024</h1>
          <button className={styles.button85}>
            <a
              href="https://forms.gle/5SwKnYy19xbJ6EWMA"
              target="registration-form"
            >
              Register Now
            </a>
          </button>

        <div>
          <div className={styles.roarSection}>
            <h1 className={styles.mobileonlytext}>THE ROAR OF EMINENCE</h1>
            <img src={Main} alt="" className={styles.mainImage}data-aos="fade-up" />
            <h1 className={styles.firstText}data-aos="fade-left"> THE ROAR</h1>
            <img src={New_Logo}data-aos="fade-up" alt="" className={styles.lionImage} />
            <h1 className={styles.secondText}data-aos="fade-right"> OF EMINENCE</h1>
          </div>
          <div className={styles.button}></div>
        </div>
        {/* <a
            href="urjatiet.com/register"
            className={styles.registerButton}
            target="_blank"
          >
            Register Now!
          </a>
        </div> */}
        <div className={styles.videonapp}>
          <div className={styles.videoheading}>
            <h1 className={styles.urjarchivestext}data-aos="fade-up">Urja Archives</h1>
            <video className={styles.video}data-aos="fade-up" controls>
              <source src={urja_aftermovie_final} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        
        <div className={styles.app}>
          <a href="https://play.google.com/store/apps/details?id=com.saturnalia.saturnalia_app">
            <img src={download} alt="" data-aos="fade-up"/>
          </a>
          <img src={app} alt="" className={styles.phone}data-aos="fade-up" />
        </div>
        </div>
      </div>
      <div className={styles.mobileviewonly}>
        <About />
        <Events />
        <Gallery />
        <Contact />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
