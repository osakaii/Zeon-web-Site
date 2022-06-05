import React, { useState } from "react";
import styles from "../../styles/MainPage/Questions.module.scss";
import image from "../../Assets/questions.jpeg";

function Questions(props) {

  const [ answers, setAnswers ] = useState([
    {
      answer: "Стажировка стоит 15000 сом в месяц. Стоимость включает расходы на обучение. Оплату можно провести двумя способами: ежемесячно вносить 15000 сом или использовать вариант рассрочки. С отсрочкой платежа, плата начнет списываться ежемесячно уже после вашего трудоустройства на протяжении одного года. С учетом ежемесячного списания ваш оклад в начале составит примерно 700-800$",
      isOpen: false
    }
  ])

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.main}>
            <h3>Вопрос - ответ</h3>
            <div className={styles.questionWrapper}>
              <div className={styles.question}>
                <div className={styles.number}>1</div>
                <div className={styles.questionTitle}>
                  Сколько стоит стажировка?
                </div>
                <div className={styles.plus}>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.875977"
                      y1="9.5498"
                      x2="21.9996"
                      y2="9.5498"
                      stroke="black"
                    />
                    <line
                      x1="11.3511"
                      y1="20.0482"
                      x2="11.3511"
                      y2="0.0482178"
                      stroke="black"
                    />
                  </svg>
                </div>
                <p className={styles.answer}>{ answers.isOpen? answers.answer : null}</p>
              </div>
              <div className={styles.question}>
                <div className={styles.number}>2</div>
                <div className={styles.questionTitle}>
                  Гарантированно ли трудоустройство после стажировки?
                </div>
                <div className={styles.plus}>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.875977"
                      y1="9.5498"
                      x2="21.9996"
                      y2="9.5498"
                      stroke="black"
                    />
                    <line
                      x1="11.3511"
                      y1="20.0482"
                      x2="11.3511"
                      y2="0.0482178"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.question}>
                <div className={styles.number}>3</div>
                <div className={styles.questionTitle}>
                  Буду ли я платить, если не пройду стажировку до конца?
                </div>
                <div className={styles.plus}>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.875977"
                      y1="9.5498"
                      x2="21.9996"
                      y2="9.5498"
                      stroke="black"
                    />
                    <line
                      x1="11.3511"
                      y1="20.0482"
                      x2="11.3511"
                      y2="0.0482178"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.question}>
                <div className={styles.number}>4</div>
                <div className={styles.questionTitle}>
                  Могу ли я пройти стажировку ускоренно?
                </div>
                <div className={styles.plus}>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.875977"
                      y1="9.5498"
                      x2="21.9996"
                      y2="9.5498"
                      stroke="black"
                    />
                    <line
                      x1="11.3511"
                      y1="20.0482"
                      x2="11.3511"
                      y2="0.0482178"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.question}>
                <div className={styles.number}>5</div>
                <div className={styles.questionTitle}>
                  Возможно ли получить отказ в трудоустройстве, и чем это
                  грозит?{" "}
                </div>
                <div className={styles.plus}>
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.875977"
                      y1="9.5498"
                      x2="21.9996"
                      y2="9.5498"
                      stroke="black"
                    />
                    <line
                      x1="11.3511"
                      y1="20.0482"
                      x2="11.3511"
                      y2="0.0482178"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img src={image} alt="questions" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
