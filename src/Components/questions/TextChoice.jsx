import React from "react";
import styles from "./Question.module.scss";

function TextChoice({ index, questionsInfo, setUserAnswer, inputValue }) {
    const handleInputChange = (e, id) => {
        setUserAnswer((prev) => ({
            ...prev,
            question: id,
            text: e.target.value,
        }));
    };


    return (
        <div className={styles.question}>
            <div className={styles.questionIndex}>
                <div className={styles.index}>{index}</div>
                <h5>Как решить эту проблему</h5>
            </div>
            <p className={styles.questionTitle}>{questionsInfo.title}</p>
            <input type="text" placeholder="Ваш ответ" className={styles.textInp} onChange={(e) => handleInputChange(e, questionsInfo.id)} value={inputValue} />
        </div>
    );
}

export default TextChoice;
