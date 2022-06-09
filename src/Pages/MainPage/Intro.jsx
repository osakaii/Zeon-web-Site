import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import ContactUs from "../../Components/Modals/ContactUs";

function Intro(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.intro}>
      {isModalOpen && <ContactUs setIsModalOpen={setIsModalOpen} />}
      <div className="container">
        <div className={styles.intro__content}>
          <h1>Lets make the world a better place</h1>
          <p>
            Нашей главной задачей является удовлетворение потребностей <br />
            заказчиков и желаний разработчиков.
          </p>
          <div className={styles.buttonDiv}>
            <button
              className={`${styles.button1} button`}
              onClick={() => setIsModalOpen(true)}
            >
              Связаться с нами
            </button>
            <button className={`${styles.button2} button`}>Пройти тест</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
