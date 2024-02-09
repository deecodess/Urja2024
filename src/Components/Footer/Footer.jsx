import React from 'react';
import styles from './Footer.module.css';
import InstagramIcon from '../../assets/Instagram.png';
import MailIcon from '../../assets/Mailicon.png';
const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <h2 className={styles.celebratetext}>Let's Celebrate URJA!</h2>
      <div className={styles.contactpart}>
        <h3>Contact Us</h3>
        <h3>urjatiet@thapar.edu</h3>
      </div>
        <div className={styles.iconspart}>
            <a href="https://www.instagram.com/urja.tiet">
            <img src={InstagramIcon} className={styles.instaicon} /></a>
            <a href="https://www.mail.google.com">
            <img src={MailIcon}/></a>
        </div>
    </div>
  )
}

export default Footer;
