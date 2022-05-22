import React from "react";
import styles from "../../../styles/Company/CompanySpecifity.module.scss";
import image from "../../../Assets/Company/spec.jpeg";

function CompanySpecifity(props) {
  return (
    <section className={styles.Spec}>
      <div className="container">
        <div className={styles.specContent}>
          <div className={styles.main}>
            <h1>В чем наша особенность?</h1>
            <div className={styles.info}>
              <p className={styles.desc}>
                Мы являемся связующим звеном между компаниями заинтересованными
                в кадрах и талантливыми разработчиками ищущих интересные
                международные проекты и хорошую зарплату.
              </p>
              <div className={styles.stat}>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>
                    {" "}
                    <span>$</span>1500
                  </p>
                  <p className={styles.statDesc}>Средняя заработная плата</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>20</p>
                  <p className={styles.statDesc}>Стран</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>
                    145 <span>+</span>
                  </p>
                  <p className={styles.statDesc}>
                    Трудоустроенных разработчиков
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default CompanySpecifity;
