import React from "react";
import styles from "./About.module.css";
import line1 from "../../assets/Line 4.png";
import line2 from "../../assets/Line 7.png";
import line3 from "../../assets/Line 3.png";
import Navbar from "../../Components/Navbar/Navbar";
import urja_anthem from "../../assets/urja_anthem.mp3";

const About = () => {
  return (
    <>
      <div className={styles.All}>
        <Navbar></Navbar>
        <div style={{ position: "relative" }}>
          <div className={styles.Aboutbackgroundtext}></div>
          <h1 className={styles.aboutheading}>ABOUT US</h1>
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

        <div style={{ position: "relative" }}>
          <div className={styles.Historybackgroundtext}></div>
          <h1 className={styles.historyheading}>HISTORY</h1>
          <img src={line3} alt="" className={styles.HistoryLine} />
        </div>
        <div className={styles.p2}>
          <p>
            Gear up for the highly anticipated next edition of URJA, the
            flagship sports fest at Thapar Institute of Engineering &
            Technology! As a cornerstone of TIET's cultural identity, URJA has a
            rich history of hosting magnificent sports festivals that bring
            together college teams from across the nation. Get ready for an
            emotional, action-packed three-day experience filled with energy and
            excitement. URJA doesn't just focus on the games; it offers a
            holistic experience that captivates participants and attendees
            alike. With a diverse array of sporting events, participants will be
            pushed to their limits, engaging in intense competitions that test
            both their skills and spirits. But it doesn't stop there – URJA goes
            a step further by incorporating enticing events such as professional
            shows. It's an opportunity to celebrate skill, spirit, and unmatched
            competition. URJA extends a warm invitation to all participants to
            join in the festivities and make this three-day fest an
            unforgettable celebration. Come and be part of the thrill!
          </p>
          <img src={line2} alt="" className={styles.line2} />
        </div>

        <div style={{ position: "relative" }}>
          <div className={styles.Themebackgroundtext}></div>
          <h1 className={styles.themeheading}>THEME</h1>
          <img src={line3} alt="" className={styles.ThemeLine} />
        </div>
        <div className={styles.p3}>
          <p>
            Unveiling 'Sher-E-Urja' – not merely a fest, but an opulent
            celebration of sportsmanship and prestige. Brace yourselves for a
            journey where every competition resonates with the heartbeat of
            excellence. Witness champions grace the arena with an unmatched
            blend of skill and sophisticated elegance. Join us in rewriting the
            chapters of athletic legacy with sheer elegance.
          </p>
        </div>
        <h2 className={styles.audioheading}>URJA ANTHEM</h2>
        <hr
          style={{
            maxWidth: "18rem",
            zIndex: 2,
            backgroundColor: "#E8E8E8",
          }}
        />
        <audio controls className={styles.audioPlayer}>
          <source src={urja_anthem} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};

export default About;
