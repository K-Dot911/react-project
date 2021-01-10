import React from 'react';
import styles from './comment.css';
import moment from "moment";

export function Comment() {
  return (
    <div className={styles.comment}>
        <div className={styles.lineWrapper}>
            <div className={styles.up}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className={styles.down}>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
                </svg>
            </div>
        </div>

        <div className={styles.contentWrapper}>
              <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано 12.12.2021</span>
              </span>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                         src='https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'
                    />
                    <a href="#user-url" className={styles.username}>Михаил Рогов</a>
                </div>
        </div>

    </div>
  );
}
