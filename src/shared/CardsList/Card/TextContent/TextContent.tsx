import React from 'react';
import styles from './textcontent.css';
import moment from 'moment'
import {Title} from "./Title";
import {Controls} from "../Controls";

interface ITextContentInterface {
    avatarUrl: string;
    avatarAlt: string;
    authorName: string;
    postDate: string;
    postTitle: string;
    postUrl: string;
    postHint: string
}

export function TextContent({avatarUrl, avatarAlt, authorName, postDate, postTitle, postUrl, postHint}: ITextContentInterface) {

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                         src={avatarUrl}
                         alt={avatarAlt}
                    />
                    <a href="#user-url" className={styles.username}>{authorName}</a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано</span>
                    {moment(postDate).format("DD-MM-YYYY h:mm:ss")}</span>
            </div>
         <Title  postHint={postHint} postTitle={postTitle}  postUrl={postUrl}/>
        </div>
    );
}
