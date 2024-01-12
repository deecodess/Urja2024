import React from 'react';
import Urja_logo from '../../assets/Group 23.png';
import Main from '../../assets/Group 19.png';
import Lion_img from '../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png';
import Roar from '../../assets/Group 21 (1).png';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <NavLink exact activeClassName={styles.active_class} to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/about">
          About Us
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/sports">
          Sports
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/gallery">
          Gallery
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/contact">
          Contact
        </NavLink>
        <NavLink exact activeClassName={styles.passive_class} to="/">
          Registrations
        </NavLink>
      </div>
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
