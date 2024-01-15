import React from "react";
import styles from "./About.module.css";
import line1 from "../../assets/Line 4.png";
import line2 from "../../assets/Line 7.png";
import line3 from "../../assets/Line 3.png";
import { Navigate } from "react-router-dom";
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
            Urja is one of the biggest sports extravaganzas in the Country, and
            We are back with the 6th edition this year. Thapar University's
            annual sports fest has been a stage for college teams to showcase
            their supremacy by competing amongst the nation's best talents. TU
            has had a rich history of hosting magnificent and renowned fests ,
            encompassing innumerable institutes across India. After a three-year
            gap, the fest is set to witness the thrill, excitement, and
            competitiveness like never before. Train yourself and get ready to
            go out, all guns blazing, in the quest for victory!
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
            Urja is one of the biggest sports extravaganzas in the Country, and
            We are back with the 6th edition this year. Thapar University's
            annual sports fest has been a stage for college teams to showcase
            their supremacy by competing amongst the nation's best talents. TU
            has had a rich history of hosting magnificent and renowned fests ,
            encompassing innumerable institutes across India. After a three-year
            gap, the fest is set to witness the thrill, excitement, and
            competitiveness like never before. Train yourself and get ready to
            go out, all guns blazing, in the quest for victory!
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
            Urja is one of the biggest sports extravaganzas in the Country, and
            We are back with the 6th edition this year. Thapar University's
            annual sports fest has been a stage for college teams to showcase
            their supremacy by competing amongst the nation's best talents. TU
            has had a rich history of hosting magnificent and renowned fests ,
            encompassing innumerable institutes across India. After a three-year
            gap, the fest is set to witness the thrill, excitement, and
            competitiveness like never before. Train yourself and get ready to
            go out, all guns blazing, in the quest for victory!
          </p>
        </div>

        <div className={styles.button}>
          <button className={styles.knowmore} onClick={() => Navigate("")}>
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
