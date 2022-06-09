import React from 'react';
import styles from "../../styles/Company/CompanyIntro.module.scss"
import backgroundLogo from '../../Assets/Company/intro.svg'

function CompanyIntro(props) {
    return (
        <section className={styles.intro}>
            <img src={backgroundLogo} alt="" />
            <div className="container">
                <div className={styles.introContent}>
                    <p>О нас</p>
                    <h2>Мы объединяем людей для <br /> достижения общих целей </h2>
                    <p className={styles.desc}>Мы обеспечиваем талантливых специалистов достойной работой, а также даем компаниям возможность 
                        работать с трудолюбивыми разработчиками на максимально выгодных для обеих сторон условиях.</p>
                </div>
            </div>
        </section>
    );
}

export default CompanyIntro;