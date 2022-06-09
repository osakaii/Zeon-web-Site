import React from "react";
import styles from "./ContactPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ContactIntro from "../../Components/Contact/ContactIntro";
import Buttons from "../../Common/buttons/Buttons";

function ContactPage(props) {
  return (
    <div className={styles.contact}>
      <Header filled={false} />
      <ContactIntro />
      <div className={styles.contactMain}>
        <div className={styles.info}>
          <h3>Контакты</h3>
          <p>Phone Number</p>
          <h5>+996 550 055 577</h5>
          <p>E-mail:</p>
          <h5>Zeonithub@gmail.com</h5>
          <p>Adress</p>
          <h5>Shopokova st 143/2</h5>
          <p>Social Media</p>
          <div className={styles.socialIcons}></div>
          <Buttons name1="Связаться с нами" name2="Пройти тест" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
