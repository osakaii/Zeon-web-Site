import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Header.module.scss";
import blueLogo from "../../Assets/blue-logo.svg";
import whiteLogo from "../../Assets/Header-zeon-logo.svg";
import ContactUs from "../../Components/Modals/ContactUs";
import HeaderNav from "./HeaderNav";

function Header({ filled, location }) {
  const nowPage = window.location.pathname.slice(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [burger, setBurger] = useState(false);
  const [openMobNav, setOpenMobNav] = useState(false);

  const toggleOpen = () => {
    openMobNav ? setOpenMobNav(false) : setOpenMobNav(true);
  };

  
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 905) {
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
          <Link to={"/"} className={styles.logo}>
            <img
              src={filled ? blueLogo : whiteLogo}
              alt="logo"
            />
          </Link>
          {burger && (
            <div className={openMobNav ? styles.burgerBtn + " " + styles.open : styles.burgerBtn} onClick={() => toggleOpen()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {burger ? (
            <div
              className={
                openMobNav
                  ? styles.mobileNav + " " + styles.opened
                  : styles.mobileNav
              }
            >
              <HeaderNav
                nowPage={nowPage}
                filled={filled}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          ) : (
            <HeaderNav
              nowPage={nowPage}
              filled={filled}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
