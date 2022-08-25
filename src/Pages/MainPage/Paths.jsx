import React from "react";
import styles from "./MainPage.module.scss";
import python from "../../Assets/languages/python.jpeg";
import js from "../../Assets/languages/js.jpeg";
import react from "../../Assets/languages/react.jpeg";
import django from "../../Assets/languages/django.jpeg";
import java from "../../Assets/languages/java.jpeg";
import devops from "../../Assets/languages/devops.jpeg";

import { ReactComponent as WorkSvg } from "../../Assets/MainPage/Work.svg";
import { ReactComponent as StarSvg } from "../../Assets/MainPage/Star.svg";
import { Link } from "react-router-dom";

function Paths(props) {
  return (
    <section className={styles.paths}>
      <div className="container">
        <h2>Наши направления</h2>
        <div className={styles.pathBlocks}>
          <div className={styles.path__block}>
            <div className={styles.fourthImage}>
              <Link to = 'career'>
                <div className={styles.imageDiv}>
                  <WorkSvg />
                  <div>
                    <p className={styles.imgTxt}>Работа</p>
                    <p className={styles.imgMiniTxt}>Найти вакансии</p>
                  </div>
                </div>
              </Link>
            </div>
            <p className={styles.underImgTxt}>
              Мы занимаемся трудоустройством опытных разработчиков с любым
              стеком в компании партнеров в сферах blockchain, fintech, AI,
              E-commerce etc. Плюсы для кандидата:
            </p>
            <ul>
              <li>100% удаленная работа</li>
              <li> конкурентоспособная заработная плата </li>
              <li> возможность релокейта</li>
            </ul>

            <div className={styles.path__lang}>
              <img src={python} alt="python" />
              <img src={js} alt="python" />
              <img src={java} alt="python" />
              <img src={devops} alt="python" />
            </div>
          </div>
          <div className={styles.path__block}>
            <div className={styles.fourthImage2}>
              <div className={styles.imageDiv}>
                <StarSvg />
                <div>
                  <p className={styles.imgTxt}>Стажировка</p>
                  <p className={styles.imgMiniTxt}>Подать заявку</p>
                </div>
              </div>
            </div>
            <p className={styles.underImgTxt}>
              Программа повышения квалификации предназначена для начинающих
              разработчиков. В течении 6 месяцев стажеры прокачаем навыки до
              необходимого уровня для трудоустройства. По итогу кандидат
              получит:
            </p>
            <ul>
              <li>оффер на работу от компаний партнеров с высоким окладом</li>
              <li> прокачку скиллов до уровня Middle </li>
              <li> места в огромном IT сообществе</li>
            </ul>

            <div className={styles.path__lang}>
              <img src={python} alt="python" />
              <img src={js} alt="python" />
              <img src={react} alt="python" />
              <img src={django} alt="python" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Paths;
