import React from "react";
import styles from "../../styles/Test/TestAuth.module.scss";
import { ReactComponent as Logo } from "../../Assets/just-logo.svg";
import { Link } from "react-router-dom";

function TestAuth(props) {
  return (
    <div className={styles.testAuth}>
      <div className={styles.intro}>
        <div className={styles.logo_div}>
          <Logo />
        </div>
        <h3>Zeon IT Hub</h3>
        <p>
          международная компания по аутсорсингу и аутстаффингу в Центральной
          Азии
        </p>
        <Link to="/" className={styles.button}>
          Вернутся на главную
        </Link>
      </div>
      <div className={styles.selectTest}>
        <h4>Пройти тест</h4>
        <p>
          У вас будет <span> 60 минут</span>, чтобы ответить на 20 тех. вопросов
          по профилю и 10 вопросов на логику мышления.
        </p>
        <div className={styles.options}>
          <Link to="Frontend" className={styles.front}>
              FrontEnd <br /> developer
          </Link>
          <Link to="Backend" className={styles.back}>
              Backend <br /> developer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TestAuth;
