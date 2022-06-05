import React from "react";
import styles from "./ResponseModal.module.scss";

function ResponseModal(props) {
  const handleSubmit = (e) => {
      e.preventDefault()
  };

  return (
    <div className={styles.modalWindow}>
      <div className={styles.modalWrapper}>
        <form action="#" className={styles.modalForm} onSubmit={handleSubmit}>
          <svg 
            onClick={()=> props.setShowModal(false)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
              fill="#999999"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="#999999"
            />
          </svg>
          <h4>Отликнуться на вакансию</h4>
          <p>
            Оставьте вашу заявку мы рассмотрим ее и обязательно уведомим вас о
            результате
          </p>
          <input
            type="text"
            className={styles.input}
            placeholder="Как вас зовут?"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Ваша Фамилия"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="+996 555 XXX XXX"
          />
          <input
            type="email"
            className={styles.input}
            placeholder="Ваша электронная почта"
          />
          <button className={styles.send}>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default ResponseModal;
