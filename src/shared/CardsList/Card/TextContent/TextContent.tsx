import React from 'react';
import styles from './textcontent.css';
import moment from 'moment'

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
            <h2 className={styles.title}>
                {postHint === 'image' ? <span className={styles.postLink}>{postTitle}</span> : <a href={postUrl} className={styles.postLink}>
                    {postTitle}
                </a> }
            </h2>
        </div>
    );
}
