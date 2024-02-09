import React,{useEffect,useState,useRef} from "react";
import styles from "./LandingNew.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Lion from "../../assets/Trophy.svg";
import urja_aftermovie_final from "../../assets/urja_aftermovie_final.mp4";
import downloadapp from "./../../assets/downloadapp.png";
import app from "./../../assets/app.png";
import Footer from "../../Components/Footer/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Animate.css';
const LandingNew = () => {
  useEffect (() => {
    Aos.init ({
      duration: 2000});
  }, []);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            entry.target.classList.add('animate-on-view');
            setHasAnimated(true); // Ensure animation only happens once
            observer.unobserve(entry.target); // Stop observing the element
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated]);

  return (
    <div>
      <div className={styles.landingcontainer} data-aos="fade-up">
        <Navbar />
        <h1 className={styles.mainheading} >URJA</h1>
        
        <div className={styles.lowerpart}>
          <h2 className={styles.lowerleftpart}>
            ANNUAL
             SPORTS FEST OF
             THAPAR INSTITUTE
          </h2>
          <button className={styles.registerButton}>REGISTER!</button>
          <img src={Lion} className={styles.centrepiece}/>
          <h2 className={styles.lowerrightpart}>
            2024 <br/>THE ROAR OF EMINENCE
          </h2>
          
        </div>
      </div>
      <div>
        <div className={styles.videoheading} data-aos="fade-up">
          <h1>URJA ARCHIVES</h1>
          <video className={styles.video} controls>
            <source src={urja_aftermovie_final} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.apppart} data-aos="fade-up">
        <a href="https://play.google.com/store/apps/details?id=com.saturnalia.saturnalia_app"></a>
        <img src={downloadapp} className={styles.downloadapp} />
        <img src={app} alt="" className={styles.phoneimg} />
      </div>
      <Footer/>
    </div>
  );
};

export default LandingNew;
