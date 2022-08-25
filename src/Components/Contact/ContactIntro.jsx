import React from "react";
import styles from "../../styles/Contact/ContactIntro.module.scss";
import backgroundLogo from "../../Assets/Company/intro.svg";

function ContactIntro(props) {
  return (
    <section className={styles.intro}>
      <img src={backgroundLogo} alt="" />
      <div className="container">
        <div className={styles.introContent}>
          <p>Контакты </p>
          <h2>Мы связываем людей и технологии. <br /> Оставайтесь <u> на связи</u></h2>
        </div>
      </div>
    </section>
  );
}

export default ContactIntro;
