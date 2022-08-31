import React from "react";
import styles from "./Question.module.scss";

function MultiChoice({index, questionsInfo}) {
    
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
                        <input type="checkbox" name="checkBoxes"/>
                        <p className={styles.questionText}>{el.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiChoice;
