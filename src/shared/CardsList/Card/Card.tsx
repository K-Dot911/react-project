import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent"
import {Menu} from "./Menu";
import {Controls} from "./Controls";

export function Card() {
    return (
        <li className={styles.card}>
            <TextContent />
            <div className={styles.preview}>
                <img className={styles.previewImg}
                     src="https://cdn.dribbble.com/users/1421201/screenshots/14453037/media/264230b1f5a45f1ef74c005746d8ee9f.jpg"
                     alt="post image"
                />
            </div>
            <Menu />
            <Controls />
        </li>
    );
}
