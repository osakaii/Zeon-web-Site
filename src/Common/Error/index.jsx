import React from "react";
import styles from "./error.module.scss";

function ErrorMessage({ message }) {
    return <p className={styles.errorText}>{message}</p>;
}

export default ErrorMessage;
