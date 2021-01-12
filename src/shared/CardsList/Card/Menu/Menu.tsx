import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuIcon} from "../../../Icons/MenuIcon";
import {MenuListItem} from "./MenuListItem";
import ReactDom from "react-dom";

export function Menu() {

    const node = document.querySelector('#dropdown_root')
    if (!node) return null;

    return (
        ReactDom.createPortal(
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
        </div>, node)
    );
}
