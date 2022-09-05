import React from "react";
import styles from "./Question.module.scss";

function MultiTextChoice({ index, questionsInfo, setUserAnswer, userAnswers }) {
    const handleCheckboxChange = (e, questId, id) => {
        let tempArray = userAnswers;

        if (tempArray.indexOf(id) === -1) {
            tempArray.push(id);
        } else {
            tempArray.splice(tempArray.indexOf(id), 1);
        }

        setUserAnswer((prev) => ({
            ...prev,
            question: questId,
            options: tempArray,
        }));
    };

    const handleInputChange = (e, questId) => {
        setUserAnswer((prev) => ({
            ...prev,
            question: questId,
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
            <div className={styles.radioBtns}>
                {questionsInfo.options.map((el) => (
                    <div className={styles.radioWrapper} key={el.id}>
                        <input type="checkbox" name="radioBtn" onChange={(e) => handleCheckboxChange(e, questionsInfo.id, el.id)} />
                        <p className={styles.questionText}>{el.text}</p>
                    </div>
                ))}
                <input
                    type="text"
                    onChange={(e) => handleInputChange(e, questionsInfo.id)}
                    className={styles.textMulti}
                    placeholder="Свой вариант ответа"
                />
            </div>
        </div>
    );
}

export default MultiTextChoice;
