import React, { useState } from "react";
import Buttons from "../../Common/buttons/Buttons";
import styles from "../../styles/Career/CareerWhyUs.module.scss";
import ContactUs from "../Modals/ContactUs";
import CareerBlocks from "./CareerBlocks";
import { ReactComponent as RemoteSvg } from "../../Assets/career/block1.svg";
import { ReactComponent as HandsSvg } from "../../Assets/career/block2.svg";
import { ReactComponent as TimeSvg } from "../../Assets/career/block3.svg";
import { ReactComponent as IdesSvg } from "../../Assets/career/block4.svg";

function CareerWhyUs(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.whyUs}>
      {isModalOpen && <ContactUs setIsModalOpen={setIsModalOpen} />}
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.leftName}>Почему мы?</p>
            <h4>Работай на международном рынке вместе с нами</h4>
            <p className={styles.leftDesc}>
              Мы тесно сотрудничаем с IT компаниями стран Европы, США и Канады
            </p>
            <Buttons
              name1="Связаться с нами"
              name2="Пройти тест"
              firstButtonFunc={closeModal}
            />
          </div>
          <div className={styles.right}>
            <CareerBlocks
              svg={<RemoteSvg />}
              title={"100% удаленная работа"}
              desc="Мы предлагаем полностью удаленную работу с любой точки мира. При желании можно так же работать с нашего офиса, который наделен всем необходимым для эффективной работы"
            />
            <CareerBlocks  svg={<HandsSvg />}
              title={"Международная команда"}
              desc = "Ваша команда будет состоят из профессионалов со всех стран мира. Это хорошая возможность расширить нетворкинг и получить хорошие перспективы для развития"/>
            <CareerBlocks  svg={<TimeSvg />}
              title={"Гибкий график"}
              desc = "График работы зависит от часового пояса компании партнера. Вам "/>
            <CareerBlocks  svg={<IdesSvg />}
              title={"Интересные проекты"}
              desc = "Мы имеем базy компаний с разной сферой деятельности. В основном мы предлагаем проекты в сферах blockchain, fintech, AI, E-commerce "/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerWhyUs;
