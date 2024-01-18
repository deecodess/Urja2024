import React from "react";
import styles from "./About.module.css";
import line1 from "../../assets/Line 4.png";
import line2 from "../../assets/Line 7.png";
import line3 from "../../assets/Line 3.png";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <div className={styles.All}>
        <Navbar></Navbar>
        <div className={styles.Aboutus}>
          <h1>ABOUT US</h1>
          <div className={styles.Aboutbackgroundtext}></div>
          <img src={line3} alt="" className={styles.AboutusLine} />
        </div>
        <div className={styles.p1}>
          <p>
            Step into URJA, the ultimate spectacle of sports brilliance! Get
            ready for the grandeur of the next edition at Thapar University,
            where college teams illuminate the stage amid the nation's brightest
            talents. With TIET’s legacy of hosting standout fests across India,
            this promises to be an unmissable fusion of thrill, excitement, and
            friendly competition. Imagine yourself at the epicenter of this
            extraordinary experience! Train up, rally your spirit, and join us
            in the pursuit of victory. URJA calls you to an unmatched blend of
            simplicity and grandeur, ensuring an experience beyond compare! Your
            adventure awaits!
          </p>
          <img src={line1} alt="" className={styles.line1} />
        </div>

        <div className={styles.History}>
          <h1>HISTORY</h1>
          <div className={styles.Historybackgroundtext}></div>
          <img src={line3} alt="" className={styles.HistoryLine} />
        </div>
        <div className={styles.p2}>
          <p>
            Step into URJA, the ultimate spectacle of sports brilliance! Get
            ready for the grandeur of the next edition at Thapar University,
            where college teams illuminate the stage amid the nation's brightest
            talents. With TIET’s legacy of hosting standout fests across India,
            this promises to be an unmissable fusion of thrill, excitement, and
            friendly competition. Imagine yourself at the epicenter of this
            extraordinary experience! Train up, rally your spirit, and join us
            in the pursuit of victory. URJA calls you to an unmatched blend of
            simplicity and grandeur, ensuring an experience beyond compare! Your
            adventure awaits!
          </p>
          <img src={line2} alt="" className={styles.line2} />
        </div>

        <div className={styles.Theme}>
          <h1>THEME</h1>
          <div className={styles.Themebackgroundtext}></div>
          <img src={line3} alt="" className={styles.ThemeLine} />
        </div>
        <div className={styles.p3}>
          <p>
            Step into URJA, the ultimate spectacle of sports brilliance! Get
            ready for the grandeur of the next edition at Thapar University,
            where college teams illuminate the stage amid the nation's brightest
            talents. With TIET’s legacy of hosting standout fests across India,
            this promises to be an unmissable fusion of thrill, excitement, and
            friendly competition. Imagine yourself at the epicenter of this
            extraordinary experience! Train up, rally your spirit, and join us
            in the pursuit of victory. URJA calls you to an unmatched blend of
            simplicity and grandeur, ensuring an experience beyond compare! Your
            adventure awaits!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
