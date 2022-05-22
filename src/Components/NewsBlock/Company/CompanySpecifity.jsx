import React from "react";
import styles from "../../../styles/Company/CompanySpecifity.module.scss";
import image from '../../../Assets/Company/spec.jpeg'

function CompanySpecifity(props) {
  return (
    <section className={styles.Spec}>
      <div className="container">
        <div className={styles.specContent}>
            <div className={styles.main}>
               <h1>В чем наша особенность?</h1>
               <div className={styles.info}>
                   <p>Мы являемся связующим звеном между компаниями заинтересованными в кадрах 
                       и талантливыми разработчиками ищущих интересные международные проекты и хорошую зарплату. 
                    </p>
                    <div className={styles.stat}>
                        <div className={styles.statItem}>
                            <p> <span>$</span>1500</p>
                            <p></p>
                        </div>
                        <div className={styles.statItem}></div>
                        <div className={styles.statItem}></div>
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
