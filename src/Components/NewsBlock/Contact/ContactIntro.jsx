import React from "react";
import styles from "../../../styles/Contact/ContactIntro.module.scss";
import backgroundLogo from "../../../Assets/Company/intro.svg";

function ContactIntro(props) {
  return (
    <section className={styles.intro}>
      <img src={backgroundLogo} alt="" />
      <div className="container">
        <div className={styles.introContent}>
          <p>Контакты </p>
          <h2>
            Мы связываем людей и технологии. <br /> Оставайтесь <u> на связи</u>
          </h2>
          <p className={styles.desc}>
            Zeon It Hub - это международная компания по аутсорсингу и
            аутстаффингу базирующаяся в Центральной Азии. Мы занимаемся:
            <br /> трудоустройством готовых специалистом с опытом работы от 1,5 года
            <br /> повышением квалификации начинающих разработчиков{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactIntro;
