import React from 'react';
import styles from './title.css';
import {Link} from "react-router-dom";

interface ITitleInterface {
    title: string;
    post_hint: string;
}

export function Title({title, post_hint}: ITitleInterface) {

    return (
        <h2 className={styles.title}>
            {post_hint === 'image' ? <span className={styles.postLink}>{title}</span> :
                <Link to="/posts/1" className={styles.postLink}>
                    {title}
                </Link>
            }
        </h2>
    );
}
