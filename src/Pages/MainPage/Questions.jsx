import React, { useState } from "react";
import styles from "../../styles/MainPage/Questions.module.scss";
import image from "../../Assets/questions.jpeg";
import { ReactComponent as CloseAnswer } from "../../Assets/closeModal.svg";
import { ReactComponent as OpenAnswer } from "../../Assets/plus.svg";

function Questions(props) {
  const [answers, setAnswers] = useState([
    {
      question: "Сколько стоит стажировка?",
      answer:
        "Стажировка стоит 15000 сом в месяц. Стоимость включает расходы на обучение. Оплату можно провести двумя способами: ежемесячно вносить 15000 сом или использовать вариант рассрочки. С отсрочкой платежа, плата начнет списываться ежемесячно уже после вашего трудоустройства на протяжении одного года. С учетом ежемесячного списания ваш оклад в начале составит примерно 700-800$",
      isOpen: false,
    },
    {
      question: "Гарантированно ли трудоустройство после стажировки?",
      answer:
        "При добросовестном выполнении всех поставленных перед вами задач и успешном окончании стажировки мы обеспечим трудоустройство в компании Европы. Если же с вашей стороны мы не увидим результата (срывы дедлайнов, редкое посещение, невыполнение проектов и тд) мы в праве вас отчислить.В наших интересах вас трудоустроить, поэтому мы сделаем все чтобы взрастить в вас сильного кандидата. Если же по какой то причине, при вашем успешном окончании мы не сможем вас трудоустроить, плату за стажировку с вас мы взимать не будем.",
      isOpen: false,
    },
    {
      question: "Буду ли я платить, если не пройду стажировку до конца?",
      answer:
        "Если в какой то момент вы решите не проходить стажировку дальше, по ряду ваших личных причин и соблюдением нами всех оговоренностей, мы будем вынуждены взискать плату за фактическое время обучения.   ",
      isOpen: false,
    },
    {
      question: "Могу ли я пройти стажировку ускоренно?",
      answer:
        "У вас есть возможность пройти стажировку в ускоренном формате, тем самым сократив время обучения. Это зависит от уровня ваших знаний и вашей скорости усвоения нового материала. При ускоренном заврешенном стажировки оплата производится только за фактическое время обучения. ",
      isOpen: false,
    },
    {
      question:
        "Возможно ли получить отказ в трудоустройстве, и чем это грозит? ",
      answer:
        "Возможно получить отказ от одной из компаний партнеров. Но т.к наша база парнеров состоит из +15 компаний, мы будем подбирать вам варианты до момента окончательного трудоустройства. ",
      isOpen: false,
    },
    {
      question: "Можно ли совмещать стажировку с учебой/работой? ",
      answer:
        "График стажировки: 5 дней в неделю по 8 часов в день. Совмещение возможно только при возможности своевременного выполнения проектов, усваивания учебного материала и если работа/учеба не помешают вашему учебному процессу.",
      isOpen: false,
    },
  ]);

  const changeAnswer = (id) => {
    setAnswers(
      answers.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            isOpen: !answers[id].isOpen,
          };
        }
        return item;
      })
    );
  };

  return (
    <section className={styles.questions}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.main}>
            <h3>Вопрос - ответ</h3>
            <div className={styles.questionWrapper}>
              {answers.map((item, index) => {
                return (
                  <div className={styles.question} key={item.question}>
                    <div className={styles.questDiv}>
                      <div className={styles.number}>{index + 1}</div>
                      <div className={styles.questionTitle}>
                        {item.question}
                      </div>
                      <div
                        className={styles.plus}
                        onClick={() => changeAnswer(index)}
                      >
                        {item.isOpen ? <CloseAnswer /> : <OpenAnswer />}
                      </div>
                    </div>
                    {item.isOpen && (
                      <p className={styles.answer}>{item.answer}</p>
                    )}
                  </div>
                );
              })}
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
