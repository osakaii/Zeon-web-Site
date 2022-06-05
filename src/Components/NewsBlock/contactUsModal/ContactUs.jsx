import React from "react";
import styles from "./ContactUs.module.scss";

function ContactUs({ show, toggleModal }) {

  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalWindow}>
      <form className={styles.modalForm}>
        <svg onClick={ ()=>toggleModal()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="#999999"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#999999"/>
        </svg>
        <h4>Свяжитесь с нами </h4>
        <p >
          Мы дадим вам обратную связь в течении 5 минут после отправки контакной
          информации
        </p>
        <input className={styles.input} type="text" placeholder="What’s your Name?" />
        <input className={styles.input} type="text" placeholder="+996 555 XXX XXX" />
        <input className={styles.input} type="email" placeholder="Your email " />
        <button> Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
