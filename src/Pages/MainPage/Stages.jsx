import React from "react";
import styles from "./styles/Stages.module.scss";
import photo1 from "../../Assets/stages/img1.png";
import photo2 from "../../Assets/stages/img2.png";
import photo3 from "../../Assets/stages/img3.png";
import photo4 from "../../Assets/stages/img4.png";

function Stages(props) {
  return (
    <section className={styles.stages}>
      <div className="container">
        <div className={styles.stages__content}>
          <div className={styles.stages__left}>
            <div className={styles.title}>
              <h2>Этапы повышения квалификции</h2>
              <p>
                Программа повышения квалификации рассчитана на junior
                разработчиков с хорошей теоритической базой. Именно поэтому мы
                проводим 3х этапный отбор результатом, которого будет зачисление
                на программу.{" "}
              </p>
            </div>
            <div className={styles.buttons}>
              <button className={`${styles.filledBtn} button`}>Связаться с нами</button>
              <button className={`${styles.btn} button`}>Пройти тест</button>
            </div>
          </div>
          <div className={styles.stages__right}>
            <div className={styles.item}>
              <div className={styles.item_left}>
                <div className={styles.number}>1</div>
                <div className={styles.desc}>
                  <h4>Определяем ваш уровень знаний</h4>
                  <p  className="light-gray_color">
                    На первом этапе отбора на программу необходимо заполнить
                    тестовую форму. Тестирование включает в себя технические
                    вопросы по выбранному стеку и вопросы на определение IQ. На
                    прохождение дается 60 минут.
                  </p>
                </div>
              </div>

              <img src={photo1} alt="" />
            </div>
            <div className={styles.item}>
            <div className={styles.item_left}>
              <div className={styles.number}>2</div>
              <div className={styles.desc}>
                <h4>Прохождение интервью и технического задания</h4>
                <p  className="light-gray_color">
                  После успешного прохождения первого этапа, кандидат будет
                  приглашен на face to face собеседование. Собеседование
                  включает в себя: выполнение небольшого технического задания
                  интервью с HR менеджером
                </p>
              </div>
              </div>
              <img src={photo2} alt="" />
            </div>
            <div className={styles.item}>
            <div className={styles.item_left}>
              <div className={styles.number}>3</div>
              <div className={styles.desc}>
                <h4>Прохождение испытательного срока (1 месяц)</h4>
                <p  className="light-gray_color">
                  При успешном прохождении второго этапа, кандидат будет
                  приглашен на испытальный срок. На этом этапе важно определить
                  способности каждого прошедшего в индивидуальном порядке, для
                  этого кандидатам будет дано практическое задание - реализация
                  проекта.
                </p>
              </div>
              </div>
              <img src={photo3} alt="" />
            </div>
            <div className={styles.item}>
            <div className={styles.item_left}>
              <div className={styles.number}>4</div>
              <div className={styles.desc}>
                <h4>Повышение квалификации (4-6 мес)</h4>
                <p  className="light-gray_color">
                  После зачисления на программу кандидаты начнут обучение
                  длительностью от 4 до 6 месяцев, согласно учебной программе,
                  составленной senior разработчиками. Программа состоит из
                  теоритических лекций и практических заданий.{" "}
                </p>
              </div>
              </div>
              <img src={photo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stages;
