import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../Assets/footer-logo.svg";
import { STATIC_DATA } from "../../static";

function Footer(props) {
  const goLink = (to) => {
    window.open(STATIC_DATA.links[to]);
  };
  return (
    <div className={styles.Footer}>
      <div className="container">
        <div className={styles.Footer__content}>
          <div>
            <p>Бишкек, Жумабека 105/1</p>
            <p>+996 500 558 833</p>
            <p>hr@zeon.ltd</p>
          </div>
          <div className={styles.center}>
            <Logo />
            <p>Zeon IT Hub - первая outstaff компания в Центральной Азии</p>
          </div>
          <div>
            <p onClick={() => goLink("facebook")}>LinkedIn</p>
            <p onClick={() => goLink("instagram")}>Instagram</p>
            <p onClick={() => goLink("telegram")}>Telegram</p>
          </div>
        </div>
        <div className={styles.footer_bottom}>Zeon 2022</div>
      </div>
    </div>
  );
}

export default Footer;
