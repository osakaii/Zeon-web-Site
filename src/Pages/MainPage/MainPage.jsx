import React from "react";
import styles from "./MainPage.module.scss";
import Header from "../../Common/Header/Header";
import python from "../../Assets/languages/python.png";
import js from "../../Assets/languages/js.png";
import react from "../../Assets/languages/react.png";
import SecondSection from "./SecondSection";

function MainPage(props) {
  return (
    <div className={styles.MainPage}>
      <section className={styles.firstSection}>
        <div className="container">
          <div className={styles.firstSectionMain}>
            <h1>Lets make the world a better place</h1>
            <p>
              Нашей главной задачей является удовлетворение потребностей
              заказчиков и желаний разработчиков.
            </p>
            <div className={styles.buttonDiv}>
              <button className={`${styles.button1} button`}>
                Связаться с нами
              </button>
              <button className={`${styles.button2} button`}>
                Пройти тест
              </button>
            </div>
          </div>
        </div>
      </section>
      <SecondSection />
      <section className={styles.thirdSection}>
        <div className="container">
          <div className={styles.thirdSectionBox}>
            <h3>
              Я ищу работу , как <br /> опытный разработчик
            </h3>
            <p>
              Я уже имею опыт разработки от 1,5 лет и хочу <br /> попробовать
              себя в аутстаффинге.
            </p>
            <p className="blue_color">Подробнее</p>
          </div>
          <div className={styles.thirdSectionBox}>
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
      <section className={styles.fourthSection}>
        <div className="container">
          <h2>Наши направления</h2>
          <div>
            <div className={styles.fourthSectionBlock}>
              <div className={styles.fourthImage}>
                <div></div>
              </div>
              <p>
                Мы занимаемся трудоустройством опытных разработчиков с любым{" "}
                <br />
                стеком в компании - партнеры. Плюсы для кандидата заключаются в
                <br />
                полностью удаленной работе и высокой заработной плате.
              </p>
              <div className={styles.fourthLang}>
                <img src={python} alt="python" />
                <img src={js} alt="python" />
                <img src={react} alt="python" />
                <img src={python} alt="python" />
              </div>
            </div>
            <div className={styles.fourthSectionBlock}>
              <div className={styles.fourthImage2}>
                <div></div>
              </div>
              <p>
                Программа повышения квалификации предназначена для начинающих{" "}
                <br />
                разработчиков без опыта работы. В течении 6 месяцев стажеры{" "}
                <br />
                прокачают свои навыки до необходимого уровня для
                трудоустройства.
              </p>
              <div className={styles.fourthLang}>
                <img src={python} alt="python" />
                <img src={js} alt="python" />
                <img src={react} alt="python" />
                <img src={python} alt="python" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fifthSection}>
        <div className="container">
          <h2>Our employees</h2>
          <div>
            <div className={styles.fifthBlock}>
              <img src="" alt="" />
              <div>
                <p>United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">
                Junior programmer at Google
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
            <div className={styles.fifthBlock}>
              <img src="" alt="" />
              <div>
                <p>United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">
                Junior programmer at Google
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
            <div className={styles.fifthBlock}>
              <img src="" alt="" />
              <div>
                <p>United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">
                Junior programmer at Google
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
