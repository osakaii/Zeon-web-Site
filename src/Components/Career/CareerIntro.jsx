import React from 'react';
import styles from '../../styles/Career/CareerIntro.module.scss'
import backgroundLogo from '../../Assets/Company/intro.svg'

function CareerIntro(props) {
    return (
        <section className={styles.intro}>
        <img src={backgroundLogo} alt="" />
        <div className="container">
          <div className={styles.introContent}>
            <p>Focus on connection</p>
            <h2>
             Найди работу в два клика
            </h2>
            <p className={styles.desc}>
                База вакансий с удобным поиском
            </p>
          </div>
        </div>
      </section>
    );
}

export default CareerIntro;