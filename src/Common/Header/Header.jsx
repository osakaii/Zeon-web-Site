import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import blueLogo from "../../Assets/blue-logo.svg";
import whiteLogo from "../../Assets/Header-zeon-logo.svg";
import ContactUs from "../../Components/NewsBlock/contactUsModal/ContactUs";

function Header({ filled, location }) {

  const nowPage = window.location.pathname.slice(1)


  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <div className={filled ? styles.filledHeader : styles.Header}>
      <ContactUs show = { isModalOpen } toggleModal = {toggleModal}/>
      <div className="container">
        <div
          className={filled ? styles.filledHeaderContent : styles.headerContent}
        >
          <Link to="/">
            <img src={filled ? blueLogo : whiteLogo} alt="logo" className={styles.logo}/>
          </Link>
          <ol>
            <li>
              <Link to="/career" className={ nowPage === 'career' ? styles.underlined : null}>Career</Link>
            </li>
            <li>
              <Link to="/company"  className={ nowPage === 'company' ? styles.underlined : null}>Company</Link>
            </li>
            <li>
              <Link to="/blog"  className={ nowPage === 'blog' ? styles.underlined : null}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" className={ nowPage === 'contact' ? styles.underlined : null}>Contact</Link>
            </li>
            <li>
              <button
                className={
                  filled ? `button ${styles.filledBtn}` : `button ${styles.btn}`
                }
                onClick={() => toggleModal()}
              >
                Contact Us
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Header;
