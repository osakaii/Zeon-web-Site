import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../Assets/zeonLogo.png";

function Footer(props) {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.Footer__content}>
          <div >
            <p>Бишкек, Чуй 28/1, 3 этаж</p>
            <p>+996 771 11 33 55</p>
            <p>zeonithub.com</p>
          </div>
          <div className={styles.center}>
            <img src={logo} alt="logo" />
            <p>
              Zeon It Hub is an international outsourcing and outstuffing
              company <br />
              based in Central Asia.
            </p>
          </div>
          <div >
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
