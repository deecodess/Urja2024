// Register.js
import React, {Fragment} from 'react';
import styles from './Register.module.css';
import Navbar from "../../Components/Navbar/Navbar"
const Register = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <h1 className={styles['main-heading']}> REGISTRATION </h1>
      <h2 className={styles['main-heading-2']}> REGISTRATION </h2>
      <form className={styles['form']} action=''>

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-1']}`} htmlFor="captainname">Captain’s Name</label>
          <br />
          <input className={`${styles['input-box']} ${styles['input-box-1']}`} type='text' name='captainname' id='captainname'/>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-2']}`} htmlFor="captaincontact">Captain’s Contact Number</label>
          <br />
          <input className={`${styles['input-box']} ${styles['input-box-2']}`} type='text' name='captaincontact' id='captaincontact'/>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-3']}`} htmlFor="captainroll">Captain’s Roll No. </label>
          <br></br>
          <input className={`${styles['input-box']} ${styles['input-box-3']}`} type='text' name='captainroll' id='captainroll'/>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-4']}`} htmlFor="sport">Name of Sports</label>
          <br />
          {/* Replace input with select for dropdown */}
          <select className={`${styles['input-box']} ${styles['input-box-4']}`} name='sport' id='sport'>
            <option value='option'>--select sport--</option>
            <option value='football'>Football</option>
            <option value='basketball'>Basketball</option>
            <option value='volleyball'>Volleyball</option>
            <option value='cricket'>Cricket</option>
            <option value='table-tennis'>Table Tennis</option>
            <option value='tennis'>Tennis</option>
            <option value='badminton'>Badminton</option>
            <option value='chess'>Chess</option>
            <option value='athletics'>Athletics</option>
            {/* Add more sports as needed */}
          </select>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-5']}`} htmlFor="collegename">College Name</label>
          <br />
          <input className={`${styles['input-box']} ${styles['input-box-5']}`} type='text' name='collegename' id='collegename'/>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-6']}`} htmlFor="numberofplayers">Number of players in a Team</label>
          <br />
          <input className={`${styles['input-box']} ${styles['input-box-6']}`} type='text' name='numberofplayers' id='numberofplayers'/>
        </div>
        <br />

        <div>
          <label className={`${styles['sub-heading']} ${styles['sub-heading-7']}`} htmlFor="playersandcontact">Number of players and Contact number</label>
          <br />
          <textarea className={`${styles['input-box']} ${styles['input-box-7']}`} type='text' name='playersandcontact' id='playersandcontact'/>
        </div>
        <br />

        <button type='submit' className={styles['submit-button']}>Submit</button>
 
      </form>
      </Fragment>
  );
}

export default Register;
