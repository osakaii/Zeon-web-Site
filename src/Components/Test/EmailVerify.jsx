import React, { useState } from "react";
import cn from "classnames";
import styles from "src/styles/Test/EmailVerify.module.scss";
import { login, verifyEmail } from "src/business/axios";
import ErrorMessage from "src/Common/Error";
import LogoInCircle from "src/Common/LogoInCircle/LogoInCircle";
import { useParams } from "react-router-dom";

function EmailVerify() {

    const {test} = useParams()

    const [inputValue, setInputValue] = useState("");
    const [showError, setShowError] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await verifyEmail({
            email: localStorage.getItem("email"),
            otp: inputValue,
        });

        const responseMessage = await response.data.message;

        if (responseMessage === "email verified") {
            const email = localStorage.getItem('email')
            const response = await login({
                "username": email,
                "password": email,
            })
            localStorage.setItem('token', "Token " + response.data.token)
            
        } else {
            setShowError(true);
        }
    };

    return (
        <div className={styles.testEmail}>
            <LogoInCircle />
            <p className={styles.desc}>Введите код отправленный на вашу почту</p>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Код"
                    className={showError ? cn(styles.email, styles.errorInput) : styles.email}
                    value={inputValue}
                    onInput={() => setShowError(false)}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {showError && <ErrorMessage message={"*Неверный код"} />}
                <button className={styles.sendBtn}>Отправить код</button>
            </form>
        </div>
    );
}

export default EmailVerify;
