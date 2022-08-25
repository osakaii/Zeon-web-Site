import React from "react";
import styles from "./MainPage.module.scss";
import { Link } from 'react-router-dom';

function FindWork(props) {
  return (
    <section className={styles.findWork}>
      <div className="container">
        <div className={styles.findWork__box}>
          <h3>Я ищу работу , как опытный разработчик</h3>
          <p>
            Я оцениваю себя, как разработчик уровня Middle и хочу попробовать
            себя в аутстаффинге
          </p>
          <Link className="blue_color" to="/career">Подробнее</Link>
        </div>
        <div className={styles.findWork__box}>
          <h3>Я хочу повысить квалификацию и найти работу</h3>
          <p>
            Я обладаю лишь теоритическими знаниями и хочу повысить квалификацию
            с целью получения оффера на работу
          </p>
          <Link className="blue_color" to="/test">Пройти тест</Link>
        </div>
      </div>
    </section>
  );
}

export default FindWork;
