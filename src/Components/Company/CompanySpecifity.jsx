import React from "react";
import styles from "../../styles/Company/CompanySpecifity.module.scss";
import image from "../../Assets/Company/spec.jpeg";

function CompanySpecifity(props) {
  return (
    <section className={styles.Spec}>
      <div className="container">
        <div className={styles.specContent}>
          <div className={styles.main}>
            <h1>Почему выбирают нас?</h1>
            <div className={styles.info}>
              <p className={styles.desc}>
              Первый IT Hub в Центральной Азии, первоначальной целью 
              которого является образовать связь между талантливыми разработчиками 
              в поисках интересных проектов и IT компаниями нуждающихся в ценных кадрах.
              </p>
              <div className={styles.stat}>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>
                    <span>$</span>800
                  </p>
                  <p className={styles.statDesc}>Минимальная <br /> заработная плата</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>20</p>
                  <p className={styles.statDesc}>Стран</p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statInfo}>
                    100 <span>+</span>
                  </p>
                  <p className={styles.statDesc}>
                    Штат сотрудников
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
