import React from "react";
import styles from "./LogoInCircle.module.scss";
import { ReactComponent as Logo } from "../../Assets/blue-logo.svg";

function LogoInCircle() {
    return (
        <div className={styles.logo_div}>
            <Logo />
        </div>
    );
}

export default LogoInCircle;
