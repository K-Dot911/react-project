import React from 'react';
import styles from './textcontent.css';
import moment from 'moment'
import {Title} from "./Title";

interface ITextContentInterface {
    title: string;
    created: string;
    author: string;
    post_hint: string;
}

export function TextContent({title, created, author, post_hint}: ITextContentInterface) {

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                         src={'https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'}
                    />
                    <a href="#user-url" className={styles.username}>{author}</a>
                </div>
                <span className={styles.createdAt}>
                         <span className={styles.publishedLabel}>опубликовано</span>
                    {moment(created).format("DD-MM-YYYY h:mm:ss")}</span>
            </div>
            <Title title={title} post_hint={post_hint}/>
        </div>
    );
}
