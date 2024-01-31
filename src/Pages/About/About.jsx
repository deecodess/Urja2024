import React from "react";
import styles from "./About.module.css";
import line1 from "../../assets/Line 4.png";
import line2 from "../../assets/Line 7.png";
import line3 from "../../assets/Line 3.png";
import Navbar from "../../Components/Navbar/Navbar";
import urja_anthem from "../../assets/urja_anthem.mp3";
import jogging from "../../assets/jogging.png";
import biking from "../../assets/biking.png";
import jump from "../../assets/jump.png";

const About = () => {
  return (
    <>
      <div className={styles.All}>
        <Navbar></Navbar>
        <div style={{ position: "relative" }}>
          <div className={styles.Aboutbackgroundtext}></div>
          <div className={styles.newabout}>
            <h1 className={styles.aboutheading}>ABOUT US</h1>
            <img src={jogging} alt="" className={styles.jog} />
          </div>
          <img src={line3} alt="" className={styles.AboutusLine} />
        </div>
        <div className={styles.p1}>
          <p>
            Step into URJA, the ultimate spectacle of sports brilliance! Get
            ready for the grandeur of the next edition at Thapar Institute of
            Engineering and Technology, where college teams from across the
            nation illuminate the stage amid the brightest talents. With Thapar
            Institute's legacy of hosting standout fests across India, this
            promises to be an unmissable fusion of thrill, excitement, and
            friendly competition. Imagine yourself at the epicenter of this
            extraordinary experience at Thapar University! Train up, rally your
            spirit, and join us in the pursuit of victory. URJA, hosted by
            Thapar Institute of Engineering and Technology, calls you to an
            unmatched blend of simplicity and grandeur, ensuring an experience
            beyond compare! Your adventure awaits!
          </p>
          <img src={line1} alt="" className={styles.line1} />
        </div>

        <div style={{ position: "relative" }}>
          <div className={styles.Historybackgroundtext}></div>
          <h1 className={styles.historyheading}>HISTORY</h1>
          <img src={line3} alt="" className={styles.HistoryLine} />
        </div>

        <div className={styles.p2}>
          <img src={biking} alt="" className={styles.biking} />
          <p>
            Gear up for the highly anticipated next edition of URJA, the
            flagship sports fest at Thapar Institute of Engineering &
            Technology! As a cornerstone of Thapar Institute's cultural
            identity, URJA has a rich history of hosting magnificent sports
            festivals that bring together college teams from across the nation.
            Get ready for an emotional, action-packed three-day experience
            filled with energy and excitement. URJA doesn't just focus on the
            games; it offers a holistic experience that captivates participants
            and attendees alike. With a diverse array of sporting events,
            participants from Thapar Institute will be pushed to their limits,
            engaging in intense competitions that test both their skills and
            spirits. But it doesn't stop there – URJA goes a step further by
            incorporating enticing events such as professional shows. It's an
            opportunity to celebrate skill, spirit, and unmatched competition.
            Thapar Institute's URJA extends a warm invitation to all
            participants to join in the festivities and make this three-day fest
            an unforgettable celebration. Come and be part of the thrill!
          </p>
        </div>
        <img src={line2} alt="" className={styles.line2} />

        <div style={{ position: "relative" }}>
          <div className={styles.Themebackgroundtext}></div>
          <div className={styles.newtheme}>
            <h1 className={styles.themeheading}>THEME</h1>
            <img src={jump} alt="" className={styles.jump} />
          </div>
          <img src={line3} alt="" className={styles.ThemeLine} />
        </div>
        <div className={styles.p3}>
          <p>
            Unveiling 'Sher-e-Urja' – not merely a fest, but an opulent
            celebration of sportsmanship and prestige hosted by Thapar Institute
            of Engineering and Technology. Brace yourselves for a journey where
            every competition at Thapar Institute resonates with the heartbeat
            of excellence. Witness champions from Thapar Institute grace the
            arena with an unmatched blend of skill and sophisticated elegance.
            Join Thapar Institute in rewriting the chapters of athletic legacy
            with sheer elegance at 'Sher-e-Urja,' a celebration that transcends
            ordinary boundaries.
          </p>
        </div>

        <div>
          <h2 className={styles.audioheading}>URJA ANTHEM</h2>
        </div>
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
