import React from 'react';

import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
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
      
  );
}

export default Navbar;
