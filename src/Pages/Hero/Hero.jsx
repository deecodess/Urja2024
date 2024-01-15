import React from 'react';
import Urja_logo from '../../assets/Group 23.png';
import Main from '../../assets/Group 19.png';
import Lion_img from '../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png';
import styles from './Hero.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import bg1 from '../../assets/Group 21 (1).png';
import bg2 from '../../assets/diyaAsset 1 1.png';
const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.bg1}>
          {/* <img src={bg1} alt="" /> */}
          <img src={bg2} className={styles.bg2} alt="" />
        </div>
        {/* <img src={Urja_logo} alt="URJA LOGO" className={styles.logo} /> */}

        <div className={styles.annualTechFest}>
          <h1>ANNUAL SPORTS FEST OF THAPAR</h1>
        </div>
        <img src={Main} alt="" className={styles.mainImage} />
        <div className={styles.roarSection}>
          <h1 className={styles.firstText}> THE ROAR</h1>
          <img src={Lion_img} alt="" className={styles.lionImage} />
          <h1 className={styles.secondText}> OF EMINENCE</h1>
        </div>

      </div>
    </div>
  );
};

export default Hero;
