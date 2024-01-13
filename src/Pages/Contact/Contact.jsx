import React from 'react';
import styles from './Contact.module.css';
import lionImage from '../../assets/Firefly a golden lion head trophy on a long pillar 12534 2.png' 
import UrjaLogo from '../../assets/Group 23.png'
const ContactUs = () => {


  return (
    <div className={styles["contact-container"]}>
      <div className={styles["form-container"]}>
        <h2 id={styles['header-contactUs']}>CONTACT US</h2>

        <form >
          <label >
            <div>Name</div>
            <input type="text" name="name" id={styles['name-text']}/>
          </label>
          <br />
          <label>
            <div>Email</div>
            <input type="email" name="email" id={styles['email-text']} />
          </label>
          <br />
          <label>
            <div>Message</div>
            <textarea name="message" id={styles['message-text']}/>
          </label>
          <br />
          <button type="submit" id={styles['Submit']}>Submit</button>
        </form>
      </div>

      <div className={styles["logo-container"]}>
        <p id={styles['yellow-text']}>For official communication:</p>
             <p id={styles['urja-mail']}>urja2024@gmail.com</p>
        <img src={UrjaLogo} alt="Urja Logo" id={styles['UrjaLogo']} />
      </div>
      <div className={styles["Big-logo"]}>
       {/* <img src={lionImage} alt="" className={styles['BigImage']} /> */}
       <p>BIGLION</p>
      </div>
    </div>
  );
}

export default ContactUs;
