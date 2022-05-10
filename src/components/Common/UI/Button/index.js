import React from "react";
import styles from './button.module.css';

export default (props) => {

    let buttonStyle = 'default-style';
    let type = 'button';

    switch (props.type) {
        case 'primary' :
            buttonStyle = 'primary';
            type = 'submit';
            break;
        case 'text' :
            buttonStyle = 'text-button';
            break;
        case 'link' :
            buttonStyle = 'link-button';
            break;

    }


    return (
        <button
            {...props}
            type={type}
            className={styles[buttonStyle]}

        >
            {props.children}
        </button>

    )
}
