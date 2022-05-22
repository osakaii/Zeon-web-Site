import React from "react";
import styles from "./MainPage.module.scss";

function Intro(props) {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.intro__content}>
          <h1>Lets make the world a better place</h1>
          <p>
            Нашей главной задачей является удовлетворение потребностей <br />
            заказчиков и желаний разработчиков.
          </p>
          <div className={styles.buttonDiv}>
            <button className={`${styles.button1} button`}>
              Связаться с нами
            </button>
            <button className={`${styles.button2} button`}>Пройти тест</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
