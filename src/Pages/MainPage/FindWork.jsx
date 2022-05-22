import React from 'react';
import styles from "./MainPage.module.scss";

function FindWork(props) {
    return (
        <section className={styles.findWork}>
        <div className="container">
          <div className={styles.findWork__box}>
            <h3>
              Я ищу работу , как <br /> опытный разработчик
            </h3>
            <p>
              Я уже имею опыт разработки от 1,5 лет и хочу <br /> попробовать
              себя в аутстаффинге.
            </p>
            <p className="blue_color">Подробнее</p>
          </div>
          <div className={styles.findWork__box}>
            <h3>
              Я хочу повысить <br /> квалификацию и найти работу
            </h3>
            <p>
              Я не имею опыта разработки. обладаю лишь теоритическими <br />
              знаниями. Хочу повысить квалификацию и получить оффер на работу.
            </p>
            <p className="blue_color">Пройти тест</p>
          </div>
        </div>
      </section>
    );
}

export default FindWork;