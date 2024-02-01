import {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import React, {Fragment} from 'react';
import styles from './Register.module.css';
import Navbar from '../../Components/Navbar/Navbar';

const Register = () => {
  const sportsOptions = useMemo (
    () => ({
      Badminton: {min: 3, max: 5},
      Football: {min: 11, max: 16},
      Basketball: {min: 5, max: 12},
      Cricket: {min: 11, max: 16},
      'Table Tennis (Boys)': {min: 3, max: 5},
      'Table Tennis (Girls)': {min: 2, max: 4},
      'Lawn Tennis': {min: 2, max: 5},
      Chess: {min: 4, max: 5},
      Volleyball: {min: 6, max: 12},
      'Athletics (Single Event)': {min: 1, max: 2},
      'Athletics (Relay Event)': {min: 4, max: 5},
    }),
    []
  );

  const [formData, setFormData] = useState ({
    sport: '',
    college: {
      name: '',
      location: '',
    },
    captain: {
      name: '',
      rollNumber: '',
      phoneNumber: '',
      age: '',
      emailId: '',
      paymentString: '',
    },
    players: '',
  });

  const [paymentScreenshot, setPaymentScreenshot] = useState (null);

  // useEffect (
  //   () => {
  //     if (formData.sport) {
  //       setFormData (prevFormData => ({
  //         ...prevFormData,
  //         players: new Array (sportsOptions[prevFormData.sport].max).fill ({
  //           name: '',
  //           rollNumber: '',
  //           phoneNumber: '',
  //           age: '',
  //         }),
  //       }));
  //     }
  //   },
  //   [formData.sport]
  // );

  useEffect (
    () => {
      console.log (formData);
    },
    [formData]
  );

  const handleInputChange = (event, section, field) => {
    if (section) {
      setFormData ({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: event.target.value,
        },
      });
    } else {
      setFormData ({
        ...formData,
        [field]: event.target.value,
      });
    }
  };

  const handleCaptainChange = (event, field) => {
    setFormData ({
      ...formData,
      captain: {
        ...formData.captain,
        [field]: event.target.value,
      },
    });
    // console.log (formData);
  };

  // const handlePlayerChange = (event, index, field) => {
  //   const newPlayers = [...formData.players];
  //   newPlayers[index][field] = event.target.value;
  //   setFormData ({
  //     ...formData,
  //     players: newPlayers,
  //   });
  // };

  const handlePaymentScreenshotChange = event => {
    setPaymentScreenshot (event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault ();

    const data = new FormData ();
    for (const [key, value] of Object.entries (formData)) {
      if (key === 'players') {
        data.append (key, JSON.stringify (value)); // Assuming players is an array or object
      } else {
        data.append (key, value);
      }
    }
    if (paymentScreenshot) {
      data.append ('paymentScreenshot', paymentScreenshot);
    }

    axios
      .post ('https://urja-back-production.up.railway.app/submit', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then (response => {
        console.log (response);
      })
      .catch (error => {
        console.error ('There was an error!', error);
      });
  };

  return (
    <Fragment>
      <Navbar />
      
      <div className={styles['form-container']}>
      {/* <h1 className={styles['main-heading']}> REGISTRATION </h1> */}
      <h2 className={styles['main-heading-2']}> REGISTRATION </h2>
      <form className={styles['form']} onSubmit={handleSubmit}>

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-4']}`}
            htmlFor="sport"
          >
            Name of Sports
          </label>
          <br />
          <select
            value={formData.sport}
            className={`${styles['input-box']} ${styles['input-box-4']}`}
            onChange={e => handleInputChange (e, null, 'sport')}
          >
            <option value="">Select Sport</option>
            {Object.keys (sportsOptions).map (sport => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-4']}`}
            htmlFor="collegename"
          >
            College Name
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-4']}`}
            type="text"
            name="collegename"
            id="collegename"
            value={formData.college.name}
            onChange={e => handleInputChange (e, 'college', 'name')}
          />
        </div>
        
        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-4']}`}
            htmlFor="collegelocation"
          >
            College Location
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-4']}`}
            type="text"
            name="collegelocation"
            id="collegelocation"
            value={formData.college.location}
            onChange={e => handleInputChange (e, 'college', 'location')}
          />
        </div>
        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-1']}`}
            htmlFor="captainname"
          >
            Captain’s Name
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-1']}`}
            type="text"
            name="captainname"
            id="captainname"
            value={formData.captain.name}
            onChange={e => handleCaptainChange (e, 'name')}
          />
        </div>
      

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-2']}`}
            htmlFor="captaincontact"
          >
            Captain’s Contact Number
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-2']}`}
            type="text"
            name="captaincontact"
            id="captaincontact"
            value={formData.captain.phoneNumber}
            onChange={e => handleCaptainChange (e, 'phoneNumber')}
          />
        </div>
        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-2']}`}
            htmlFor="captainage"
          >
            Captain’s Age
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-2']}`}
            type="text"
            name="captainage"
            id="captainage"
            value={formData.captain.age}
            onChange={e => handleCaptainChange (e, 'age')}
          />
        </div>
    
        <div>

          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-2']}`}
            htmlFor="captainemail"
          >
            Captain’s Email ID
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-2']}`}
            type="text"
            name="captainemail"
            id="captainemail"
            value={formData.captain.emailId}
            onChange={e => handleCaptainChange (e, 'emailId')}
          />

        </div>
        
        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-3']}`}
            htmlFor="captainroll"
          >
            Captain’s Roll No.{' '}
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-3']}`}
            type="text"
            name="captainroll"
            id="captainroll"
            value={formData.captain.rollNumber}
            onChange={e => handleCaptainChange (e, 'rollNumber')}
          />
        </div>

        <br />

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-3']}`}
            htmlFor="captainroll"
          >
            Coach Name{' '}
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-3']}`}
            type="text"
            name="captainroll"
            id="captainroll"
            value={formData.captain.rollNumber}
            onChange={e => handleCaptainChange (e, 'rollNumber')}
          />
        </div>

        <br />

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-3']}`}
            htmlFor="captainroll"
          >
            Coach Contact Number{' '}
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-3']}`}
            type="text"
            name="captainroll"
            id="captainroll"
            value={formData.captain.rollNumber}
            onChange={e => handleCaptainChange (e, 'rollNumber')}
          />
        </div>

        <br />

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-3']}`}
            htmlFor="captainroll"
          >
            Coach Email Id{' '}
          </label>
          <br />

          <input
            className={`${styles['input-box']} ${styles['input-box-3']}`}
            type="text"
            name="captainroll"
            id="captainroll"
            value={formData.captain.rollNumber}
            onChange={e => handleCaptainChange (e, 'rollNumber')}
          />
        </div>

        <br />

        <div>
          <label
            htmlFor=""
            className={`${styles['sub-heading']} ${styles['sub-heading-5']}`}
          >
            Details of other Team Player
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={`${styles['input-box']} ${styles['input-box-5']}`}
            value={formData.players}
            onChange={e => handleInputChange (e, null, 'players')}
            placeholder="Enter Name, Roll No., Contact No. and Age of all the players in the team."
          />
        </div>
        <br />

        <div>
          <label
            className={`${styles['sub-heading']} ${styles['sub-heading-4']}`}
            htmlFor="paymentscreenshot"
          >
            Upload Payment Screenshot
          </label>
          <br />
          <input
            className={`${styles['input-box']} ${styles['input-box-4']}`}
            type="file"
            name="paymentscreenshot"
            id="paymentscreenshot"
            onChange={handlePaymentScreenshotChange}
          />
        </div>
        <br />

        <button type="submit" className={styles['submit-button']}>
          Submit
        </button>

      </form>
      </div>
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <Navbar />
  //     <iframe
  //       src="https://docs.google.com/forms/d/e/1FAIpQLSdsEHCMjlzVJs6qedi3jD03sWhn-7HK8tp9f3qbvkGCCeDS8w/viewform?embedded=true"
  //       id={styles.registerForm}
  //       frameBorder="0"
  //       marginHeight="{0}"
  //       marginWidth="{0}"
  //       title="register-form"
  //     >
  //       Loading…
  //     </iframe>
  //     <button className={styles.btn}>Move to Payment</button>
  //   </Fragment>
  // );
};

export default Register;