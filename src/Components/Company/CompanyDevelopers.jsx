import React from "react";
import styles from "../../styles/Company/CompanyDevelopers.module.scss";
import DeveloperCard from "./DeveloperCard";
import developerImg from "../../Assets/Company/developer.jpg";

function CompanyDevelopers(props) {
  return (
    <div className={styles.developers}>
      <div className="container">
        <div className={styles.developerContent}>
          <p className={styles.title}>Наши разработчики</p>  
          <div className={styles.developerCardsWrapper}>
            <DeveloperCard photo={developerImg} name="Юрий дудь" desc="Коммерческий директор" />
            <DeveloperCard photo={developerImg} name="Юрий дудь" desc="Коммерческий директор" />
            <DeveloperCard photo={developerImg} name="Юрий дудь" desc="Коммерческий директор" />
            <DeveloperCard photo={developerImg} name="Юрий дудь" desc="Коммерческий директор" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDevelopers;
