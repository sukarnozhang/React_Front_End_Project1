import React from "react";
import styles from '../allCssStyling/Button.module.css';

import Button from 'react-bootstrap/Button';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Button2({onClick, label}){    
    
    return(
        <>
            <Button  onClick={onClick} variant="outline-primary"> {label} </Button> {' '}     
        </> 
    );
}

export default Button2;
