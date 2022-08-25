import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import ContactUs from "../../Components/Modals/ContactUs";
import Buttons from '../../Common/buttons/Buttons';

function Intro(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className={styles.intro}>
      {isModalOpen && <ContactUs setIsModalOpen={setIsModalOpen} />}
      <div className="container">
        <div className={styles.intro__content}>
          <h1>Повышение квалификации IT разработчиков</h1>
          <p>
            Получи возможность трудоустроиться в <br />
             топовые IT компании Европы и США    
          </p>
           <Buttons
              name1="Связаться с нами"
              name2="Пройти тест"
              firstButtonFunc={closeModal}
            />
        </div>
      </div>
    </section>
  );
}

export default Intro;
