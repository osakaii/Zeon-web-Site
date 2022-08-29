import React from "react";
import styles from "./Question.module.scss";

function TextChoice({ question, index }) {
    return (
        <div className={styles.question}>
            <h1 className={styles.title}></h1>
            <div className={styles.topics}></div>
            <p></p>
            <h2>
                <span>{index}</span>
            </h2>
            <input type="text" />
        </div>
    );
}

export default TextChoice;
