import React from "react";
import styles from "../../styles/Company/CompanyDevelopers.module.scss";
import DeveloperCard from "./DeveloperCard";
import Polina from "../../Assets/Company/Polina.jpeg";
import Artem from "../../Assets/Company/Artem.jpeg";
import Uluk from "../../Assets/Company/Uluk.jpeg";
import Islam from "../../Assets/Company/Islam.jpeg";

function CompanyDevelopers(props) {
  return (
    <div className={styles.developers}>
      <div className="container">
        <div className={styles.developerContent}>
          <p className={styles.title}>Наши менторы</p>  
          <div className={styles.developerCardsWrapper}>
            <DeveloperCard photo={Polina} name="Ахметова Полина" desc="Ментор по Front End" />
            <DeveloperCard photo={Artem} name="Афонин Артем" desc="Ментор по Back End" />
            <DeveloperCard photo={Uluk} name="Джунусов Улук" desc="Ментор по Front End" />
            <DeveloperCard photo={Islam} name="Нурдинов Ислам" desc="Ментор по Back End" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDevelopers;
