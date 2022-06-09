import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import blueLogo from "../../Assets/blue-logo.svg";
import whiteLogo from "../../Assets/Header-zeon-logo.svg";
import ContactUs from "../../Components/Modals/ContactUs";

function Header({ filled, location }) {
  const nowPage = window.location.pathname.slice(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [ openMobNav, setOpenMobNav ] = useState(false)

 const toggleOpen = () =>{
   openMobNav ? setOpenMobNav(false) : setOpenMobNav(true)
 }
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 769) {
      setBurger(true);
    }
  }, []);
  return (
    <div className={filled ? styles.filledHeader : styles.Header}>
      {isModalOpen && <ContactUs setIsModalOpen={setIsModalOpen} />}
      <div className="container">
        <div
          className={filled ? styles.filledHeaderContent : styles.headerContent}
        >
          <Link to="/">
            <img
              src={filled ? blueLogo : whiteLogo}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          {burger ? (
            <div className={styles.burgerBtn} onClick = {()=>toggleOpen()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : null}
          {burger ? (
            <div className={openMobNav? styles.mobileNav +" "+ styles.opened : styles.mobileNav}>
                <ol className={styles.nav}>
                  <li>
                    <Link
                      to="/career"
                      className={
                        nowPage === "career" ? styles.underlined : null
                      }
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/company"
                      className={
                        nowPage === "company" ? styles.underlined : null
                      }
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className={nowPage === "blog" ? styles.underlined : null}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={
                        nowPage === "contact" ? styles.underlined : null
                      }
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <button
                      className={
                        filled
                          ? `button ${styles.filledBtn}`
                          : `button ${styles.btn}`
                      }
                      onClick={() => setIsModalOpen(true)}
                    >
                      Contact Us
                    </button>
                  </li>
                </ol>
            </div>
          ) : (
            <ol className={styles.nav}>
              <li>
                <Link
                  to="/career"
                  className={nowPage === "career" ? styles.underlined : null}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className={nowPage === "company" ? styles.underlined : null}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={nowPage === "blog" ? styles.underlined : null}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={nowPage === "contact" ? styles.underlined : null}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className={
                    filled
                      ? `button ${styles.filledBtn}`
                      : `button ${styles.btn}`
                  }
                  onClick={() => setIsModalOpen(true)}
                >
                  Contact Us
                </button>
              </li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
