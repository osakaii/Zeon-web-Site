import React, { useState } from "react";
import styles from "../../styles/Test/TestEmail.module.scss";
import { useParams } from "react-router-dom";
import { register } from "../../business/axios";
import LogoInCircle from "../../Common/LogoInCircle/LogoInCircle";

function TestEmail({setIsSended}) {
    const testType = useParams().option;

    const [emailValue, setEmailValue] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await register({ "email": emailValue });
       if(response?.status === 200){
            localStorage.setItem('email', emailValue)
            setIsSended(true)
            setEmailValue("");
            return
        }
        alert('Ошибка при отправке')
    };

    return (
        <div className={styles.testEmail}>
            <LogoInCircle/>
            <h3>Тест на {testType} разработчика</h3>
            <p className={styles.desc}>На прохождение теста дается 60 минут.</p>

            <form onSubmit={submitHandler}>
                <input
                    type="email"
                    placeholder="Ваш email"
                    className={styles.email}
                    value={emailValue}
                    required
                    onChange={(e) => setEmailValue(e.target.value)}
                />
                <button className={styles.sendBtn}>Получить код</button>
            </form>
        </div>
    );
}

export default TestEmail;
