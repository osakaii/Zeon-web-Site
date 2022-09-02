import React from "react";
import Footer from "src/Common/Footer/Footer";
import Header from "src/Common/Header/Header";
import styles from "src/styles/Test/TestEnd.module.scss";
import { ReactComponent as Logo } from "src/Assets/blue-logo.svg";

function TestEnd() {
    return (
        <>
            <Header filled={true} />
            <div className={styles.end}>
                <div className={styles.content}>
                    <Logo />
                    <h2>Спасибо, что прошли тест с вами свяжутся</h2>
                    <p>Ожидайте оповещение на контакный номер. Оставайтесь, пожалуйста, на связи</p>
                    <button> Попробовать еще раз</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TestEnd;
