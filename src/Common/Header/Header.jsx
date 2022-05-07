import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from '../../Assets/zeon-icon.png'

function Header(props) {
  return (
    <div className={`${styles.Header} container`}>
      <div>
          <img src={logo} alt="logo"/>
      </div>
      <ol>
        <li>
          <Link to="#">Career</Link>
        </li>
        <li>
          <Link to="#">Company</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
      </ol>
    </div>
  );
}

export default Header;
