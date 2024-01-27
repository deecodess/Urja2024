import React from 'react';
import styles from './Contact.module.css';
import lionImage from '../../assets/halfLionHead.png';
import UrjaLogo from '../../assets/Group 23.png';
import Navbar from '../../Components/Navbar/Navbar';
import thaparLogo from './../../assets/thapar 1.png';
import insta from './../../assets/insta.png';
const ContactUs = () => {
  return (
    <div className={styles['main-div']}>
      <Navbar />
      <div className={styles['container']}>
        <div className={styles['contact-container']}>

          <div className={styles['form-container']}>
            <h2 id={styles['header-contactUs']}>CONTACT US</h2>

            <form>
              <label>
                <div id={styles['Name']}>Name</div>
                <input type="text" name="name" id={styles['name-text']} />
              </label>
              <br />
              <label>
                <div id={styles['Email']}>Email</div>
                <input type="email" name="email" id={styles['email-text']} />
              </label>
              <br />
              <label>
                <div id={styles['Message']}>Message</div>
                <textarea name="message" id={styles['message-text']} />
              </label>
              <br />
              <button type="submit" id={styles['Submit']}>Submit</button>
            </form>
          </div>

          <div className={styles['logo-container']}>
            <p id={styles['yellow-text']}>For official communication:</p>
            <p id={styles['urja-mail']}>urja2024@gmail.com</p>
            <p id={styles['urja-mail']}>
              {' '}<b>Overall Student Coordinator </b>{' '}
            </p>
            <p id={styles['urja-mail']}>Udit Munjal (7976045545) </p>
            <img src={UrjaLogo} alt="Urja Logo" id={styles['UrjaLogo']} />
            <div className={styles.social}>
              <a href="https://www.instagram.com/tietofficial/" target="blank">
                <img src={thaparLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/urja.tiet/" target="blank">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>
          <div className={styles['Big-logo']}>
            <img src={lionImage} alt="" id={styles['BigImage']} />
            {/* <p>BIGLION</p> */}
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUs;
