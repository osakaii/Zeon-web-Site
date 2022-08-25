import React from "react";
import styles from "../../styles/Company/CompanyGoals.module.scss";
import clickImg from "../../Assets/Company/Start.svg";
import { ReactComponent as Pers } from "../../Assets/Company/first.svg";
import { ReactComponent as Stonks } from "../../Assets/Company/stonks.svg";
import { ReactComponent as Ears } from "../../Assets/Company/headphones.svg";
import { ReactComponent as Checks } from "../../Assets/Company/checks.svg";
import { ReactComponent as Office } from "../../Assets/Company/office.svg";
import { ReactComponent as Talk } from "../../Assets/Company/talk.svg";

function CompanyGoals(props) {
  return (
    <section className={styles.goals}>
      <div className="container">
        <div className={styles.goalsContent}>
          <div className={styles.title}>
            <h3>Наши преимущества</h3>
            <p>
              Нашей главной задачей является удовлетворение <br /> потребностей
              как заказчиков, так и разработчиков..
            </p>
          </div>
          <div className={styles.itemsWrapper}>
            <div className={styles.item}>
              <Pers />
              <span></span>
              <h4>Топовые менторы</h4>
              <p>
                Менторы в Zeon имеют опыт работы от 5 до 20 лет и используют
                только самые востребованные на рынке технологии. Их главной
                задачей является не только дать необходимые знания, но и
                обеспечить поддержкой
              </p>
            </div>
            <div className={styles.item}>
              <Stonks />
              <span></span>
              <h4>Эффективная программа повышения квалификации </h4>
              <p>
                Повышение уровня junior разработчиков, без опыта работы, с
                последующим трудоустройством в компании Европы. Стек - JavaScipt
                (React), Python (Django)
              </p>
            </div>
            <div className={styles.item}>
              <Ears />
              <span></span>
              <h4>Поддержка после трудоустройства</h4>
              <p>
                После трудоустройства, с вами на связи останутся наши менторы и
                административный персонал. Мы ответим на возникшие вопросы и при
                надобности урегулируем отношения с компанией партнером
              </p>
            </div>
            <div className={styles.item}>
              <Checks />
              <span></span>
              <h4>Подготовка к интервью</h4>
              <p>
                Последним этапом программы является подготовка к интервью. Мы
                изучим и проработаем ваши слабые места с менторами и
                рекрутерами. Все интервью будут записываться
              </p>
            </div>
            <div className={styles.item}>
              <Office />
              <span></span>
              <h4>Комфортабельный офис</h4>
              <p>
                Мы предлагаем лучшие условия для продуктивной работы. Помимо
                основного рабочего места наш офис также имеет просторную кухню,
                настольный теннис и зону отдыха. Доступ к офису открыт 24/7
              </p>
            </div>
            <div className={styles.item}>
              <Talk />
              <span></span>
              <h4>Прокачка софт-скиллов</h4>
              <p>
                Наши рекрутеры и HR специалисты займутся совершенствованием
                ваших навыков вести диалог, проработкой ваших внутренних блоков
                и неуверенности. Мы сделаем все, чтобы по итогу вы получили
                оффер
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyGoals;
