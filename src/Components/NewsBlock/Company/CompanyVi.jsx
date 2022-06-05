import React from "react";
import styles from "../../../styles/Company/CompanyVideo.module.scss";
import videoImg from "../../../Assets/Company/internship.jpg";
import Buttons from '../../../Common/buttons/Buttons';

function CompanyVi(props) {
  return (
    <div className={styles.internship}>
      <div className="container">
        <div className={styles.internshipContent}>
          <div className={styles.imgWrapper}>
            <img src={videoImg} alt="video" />
          </div>
          <div className={styles.main}>
            <p className={styles.name}>О стажировке</p>
            <p className={styles.title}>
              Обеспечим каждого разработчика достойной работой{" "}
            </p>
            <p className={styles.desc}>
              На нашей стажировке мы стараемся создать все условия для
              дальнейшего развития новичков разработчиков. По итогу вы
              пропустите болезненный и долгий этап набора опыта, поиска (даже
              неоплачиваемой) работы, прохождения сотни собеседований и прочего.
              За 6 месяцев вы доведёте себя до лэвела Pre Middle и получите
              оффер с зп от 800$.
            </p>
            <Buttons name1 = "Смотреть" name2 = "Пройти тест "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyVi;
