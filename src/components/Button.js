import React from "react";
import styles from '../allCssStyling/Button.module.css';

function Button({onClick, label}){    
    
    return(
        <>
            <button className={styles.itemButton} onClick={onClick}>{label}</button>        
        </>
    );
}

export default Button;
