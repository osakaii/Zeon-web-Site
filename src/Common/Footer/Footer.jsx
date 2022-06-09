import React from "react";
import styles from "./Footer.module.scss";
import {ReactComponent as Logo} from '../../Assets/footer-logo.svg'

function Footer(props) {
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.Footer__content}>
          <div>
            <p>Бишкек, Чуй 28/1, 3 этаж</p>
            <p>+996 771 11 33 55</p>
            <p>zeonithub.com</p>
          </div>
          <div className={styles.center}>
           <Logo/>
            <p>
              We have made many mistakes along the way, so, that we have learned
              not to make them
            </p>
          </div>
          <div>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Telegram</p>
          </div>
        </div>
        <div className={styles.footer_bottom}>Zeon 2021 - 2022</div>
      </div>
    </div>
  );
}

export default Footer;
