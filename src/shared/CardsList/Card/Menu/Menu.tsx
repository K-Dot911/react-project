import React from 'react';
import styles from './menu.css';
import {BurgerMenu} from "./BurgerMenu";

export function Menu() {
    return (
        <div className={styles.menu}>
            <BurgerMenu></BurgerMenu>
        </div>
    );
}
