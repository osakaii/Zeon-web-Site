import React from "react";
import styles from "./MainPage.module.scss";
import python from "../../Assets/languages/python.png";
import js from "../../Assets/languages/js.png";
import react from "../../Assets/languages/react.png";

function Paths(props) {
  return (
    <section className={styles.paths}>
      <div className="container">
        <h2>Наши направления</h2>
        <div>
          <div className={styles.path__block}>
            <div className={styles.fourthImage}>
              <div></div>
            </div>
            <p>
              Мы занимаемся трудоустройством опытных разработчиков с любым{" "}
              <br />
              стеком в компании - партнеры. Плюсы для кандидата заключаются в
              <br />
              полностью удаленной работе и высокой заработной плате.
            </p>
            <div className={styles.path__lang}>
              <img src={python} alt="python" />
              <img src={js} alt="python" />
              <img src={react} alt="python" />
              <img src={python} alt="python" />
            </div>
          </div>
          <div className={styles.path__block}>
            <div className={styles.fourthImage2}>
              <div></div>
            </div>
            <p>
              Программа повышения квалификации предназначена для начинающих{" "}
              <br />
              разработчиков без опыта работы. В течении 6 месяцев стажеры <br />
              прокачают свои навыки до необходимого уровня для трудоустройства.
            </p>
            <div className={styles.path__lang}>
              <img src={python} alt="python" />
              <img src={js} alt="python" />
              <img src={react} alt="python" />
              <img src={python} alt="python" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paths;
