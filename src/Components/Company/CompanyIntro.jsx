import React from 'react';
import styles from "../../styles/Company/CompanyIntro.module.scss"
import backgroundLogo from '../../Assets/Company/intro.svg'

function CompanyIntro(props) {
    return (
        <section className={styles.intro}>
            <img src={backgroundLogo} alt="" />
            <div className="container">
                <div className={styles.introContent}>
                    <h2>Zeon IT Hub - первая outstaff компания в Центральной Азии</h2>
                    <p className={styles.desc}>Мы готовим специалистов адаптированных под критерии международных компаний.</p>
                </div>
            </div>
        </section>
    );
}

export default CompanyIntro;