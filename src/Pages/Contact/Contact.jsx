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
            <div className={styles['map']}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8072010873466!2d76.36212627502266!3d30.356428803722675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1706517068574!5m2!1sen!2sin" target="blank"></iframe>
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
