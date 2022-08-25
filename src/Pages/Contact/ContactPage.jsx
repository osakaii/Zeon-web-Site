import React, { useState } from "react";
import styles from "./ContactPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import ContactIntro from "../../Components/Contact/ContactIntro";
import Buttons from "../../Common/buttons/Buttons";
import ContactUs from "../../Components/Modals/ContactUs";
import { ReactComponent as InstLogo } from '../../Assets/contact/instagram.svg'
import { ReactComponent as Facebook } from '../../Assets/contact/facebook.svg'
import { ReactComponent as Youtube } from '../../Assets/contact/Youtube.svg'
import { ReactComponent as Tiktok } from '../../Assets/contact/tiktok.svg'
import { ReactComponent as Linked } from '../../Assets/contact/Vector.svg'
import { ReactComponent as Mark } from '../../Assets/contact/Mark.svg'
import background from '../../Assets/contact/background.jpeg'

function ContactPage(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    console.log("hello");
    setIsModalOpen(true);
  };

  return (
    <div className={styles.contact}>
       {isModalOpen && <ContactUs setIsModalOpen={setIsModalOpen} />}
      <Header filled={false} />
      <ContactIntro />
      <div className={styles.contactMain}>
      <img src={background} alt="map" className={styles.background} />
      <Mark className={styles.mapMark}/>
        <div className={styles.info}>
          <h3>Контакты</h3>
          <p>Номер телефона</p>
          <h5>+996 500 558 833</h5>
          <p>E-mail</p>
          <h5>hr@zeon.ltd</h5>
          <p>Адрес</p>
          <h5>ул. Жумабек 105/1</h5>
          <p>Социальные сети</p>
          <div className={styles.socialIcons}>
            <InstLogo onClick={()=> window.open("https://www.instagram.com/zeon.ithub/")}/>
            <Facebook onClick={()=> window.open("https://www.facebook.com/zeoncompany")}/>
            <Youtube onClick={()=> window.open("https://www.youtube.com/channel/UCfkYRS7VbZ83dc2UV_J3Nkg")}/>
            <Tiktok onClick={()=> window.open("https://www.tiktok.com/@zeon_it_hub")}/>
            <Linked onClick={()=> window.open("https://www.linkedin.com/company/77055301")}/>
          </div>
          <Buttons name1="Связаться с нами" name2="Пройти тест"  firstButtonFunc={closeModal}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
