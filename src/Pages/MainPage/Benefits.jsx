import React from "react";
import styles from "../../styles/MainPage/Benefits.module.scss";
import clickImg from "../../Assets/Benefits/Icon/click.png";
import { ReactComponent as DollarSvg } from '../../Assets/MainPage/Dollar.svg'
import { ReactComponent as StonksSvg } from '../../Assets/MainPage/Stonks.svg'
import { ReactComponent as PointSvg } from '../../Assets/MainPage/MapPoint.svg'

function Benefits(props) {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefits__content}>
          <div className={styles.titleDiv}>
            <h2>После успешного завершения программы, ты получишь </h2>
          </div>
          <div className={styles.items__wrapper}>
            <div className = {styles.first}>
              <DollarSvg/>
              <h4>Оффер на работу с зп от 800$</h4>
              <p className="light-gray_color">При успешном окончании стажировки, мы подготовим кандидата к интервью с потенциальным работодателем. После соглашения обоих сторон вся юридическая часть - лежит на нас. </p>
            </div>
            <div className = {styles.second}>
              <StonksSvg/>
              <h4>Повышение уровня до Pre-Middle</h4>
              <p className="light-gray_color">Первоочередной целью программы является усовершенствование уже имеющихся навыков до уровня необходимого для трудоустройства кандидата в крупные компании. </p>
            </div>
            <div className = {styles.third}>
                <PointSvg/>
                <h4>Возможность удаленной работы или релокейта </h4>
                <p className="light-gray_color">При получении оффера на работу кандидаты смогут работать удаленно из любой точки Земли. Некоторые компании также предлагают возможность релокейта. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
