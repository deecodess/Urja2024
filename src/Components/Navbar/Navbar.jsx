import React ,{useState}from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Urja_logo from '../../assets/Group 23.png';
import Thapar_Logo from '../../assets/thapar logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
    
     <div className={styles.links + (showLinks ? ' show' : '')}>
        <img src={Urja_logo} alt="URJA LOGO" className={styles.logo} />
        <img src={Thapar_Logo} alt="THAPAR LOGO" className={styles.logo2} />
        <div className={styles['hamburger-icon']} onClick={toggleLinks}>
          ☰
        </div>
        <NavLink exact activeClassName={styles.active_class} to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/about">
          About Us
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/events">
          Events
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/team">
          Team
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/gallery">
          Gallery
        </NavLink>
        <NavLink exact activeClassName={styles.active_class} to="/contact">
          Contact
        </NavLink>
        <NavLink exact activeClassName={styles.passive_class} to="/register">
          Registrations
        </NavLink>
      </div>
      </nav>
      
  );
}

export default Navbar;
