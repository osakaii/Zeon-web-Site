import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import blueLogo from "../../Assets/blue-logo.svg";
import whiteLogo from "../../Assets/Header-zeon-logo.svg";

function Header({ filled }) {
  // const [ headerName, setHeaderName ] = useState(styles.Header)
  // useEffect(()=>{
  //   window.addEventListener('scroll',(e)=>{
  //     if(e.path[1].scrollY > 1080){
  //       setHeaderName( `${headerName} ${styles.black}` )
  //       console.log('passed')
  //     }
  //   })
  // })

  return (
    <div className={ filled ? styles.filledHeader : styles.Header}>
      <div className="container">
        <div className={ filled ? styles.filledHeaderContent : styles.headerContent}>
          <Link to='/'>
            <img src={filled ? blueLogo : whiteLogo} alt="logo" />
          </Link>
          <ol>
            <li>
              <Link to="#">Career</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Link to="#">
                <button className={filled ? `button ${styles.filledBtn}` : `button ${styles.btn}`}>Contact Us</button>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Header;
