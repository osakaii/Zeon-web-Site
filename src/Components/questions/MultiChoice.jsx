import React from "react";
import styles from "./Question.module.scss";

function MultiChoice({ index, questionsInfo, setUserAnswer, userAnswers }) {
    console.log(questionsInfo);

    const handleInputChange = (e, questId, id) => {
        console.log(e.target.checked, id);

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
                        <input type="checkbox" name="checkBoxes" onChange={(e) => handleInputChange(e, questionsInfo.id, el.id)} />
                        <p className={styles.questionText}>{el.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MultiChoice;
