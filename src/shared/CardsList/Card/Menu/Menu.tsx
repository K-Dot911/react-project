import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons/MenuIcon";
import {MenuListItem} from "./MenuListItem";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <MenuListItem postId="1234"/>
            </Dropdown>
        </div>
    );
}
