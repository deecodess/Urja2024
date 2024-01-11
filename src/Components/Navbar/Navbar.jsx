// Navbar.jsx
import React from 'react';
import Urja_logo from '../../assets/Group 23.png';
import Main from '../../assets/Group 19.png';
import Lion_img from '../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png';
import Roar from '../../assets/Group 21 (1).png'
import Urja_Bg from '../../assets/URJA.png'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={Urja_logo} alt="URJA LOGO" className={styles.logo} />
      
      <div className={styles.annualTechFest}>
        <h1>ANNUAL SPORTS FEST OF THAPAR</h1>
      </div>
      <img src={Main} alt="" className={styles.mainImage} />
      <div className={styles.roarSection}>
        <img src={Lion_img} alt="" className={styles.lionImage} />
      </div>
      <div className={styles.alongTiger1}> 
        <img src={Roar} alt="" />
        </div>
    </div>
  );
}

export default Navbar;
