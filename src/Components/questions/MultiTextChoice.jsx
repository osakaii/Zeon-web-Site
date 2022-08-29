import React from "react";
import styles from "./Question.module.scss";


function MultiTextChoice({index, questionsInfo}) {
    console.log(questionsInfo)
    return (
        <div className={styles.question}>
            <div className={styles.questionIndex}>
                <div className={styles.index}>{index}</div>
                <h5>Как решить эту проблему</h5>
            </div>
            <p className={styles.questionTitle}>{questionsInfo.title}</p>
            <div className={styles.radioBtns}>
                {questionsInfo.options.map((el, index) => (
                    <div className={styles.radioWrapper} key={el.id}>
                        <input type="checkbox" name="radioBtn" />
                        <p className={styles.questionText}>{el.text}</p>
                    </div>
                ))}
                <input type="text" />
            </div>
        </div>
    );
}

export default MultiTextChoice;
