import React, { Fragment, useState } from 'react';
import styles from './Contact.module.css';
import lionImage from '../../assets/Screenshot 2024-01-14 184428.png' 
import UrjaLogo from '../../assets/Group 23.png'
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {

  const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true); 
      alert('Your response has been sent.');
    };
    
  return (
    <Fragment>
      <Navbar></Navbar>
    <div className={styles["contact-container"]}>
      <div className={styles["form-container"]}>
        <h2 id={styles['header-contactUs']}>CONTACT US</h2>

        <form onSubmit={handleSubmit} action="https://formsubmit.co/b5163a95cd48e3f0139a3711e7e36a18" method="POST">
        <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_next" value="https://urjatiet.com"/>
          <label >
            <div  id={styles['Name']}>Name</div>
            <input type="text" name="name" id={styles['name-text']}/>
          </label>
          <br />
          <label>
            <div  id={styles['Email']}>Email</div>
            <input type="email" name="email" id={styles['email-text']} />
          </label>
          <br />
          <label>
            <div  id={styles['Message']}>Message</div>
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
       <img src={lionImage} alt="" id={styles['BigImage']} />
       {/* <p>BIGLION</p> */}
      </div>
    </div>
    </Fragment>
  );
}

export default ContactUs;
