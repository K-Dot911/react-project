import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                         src="https://sagalatov.github.io/portfolio/img/photo.jpg"
                         alt="avatar"
                    />
                    <a href="#user-url" className={styles.username}>Сагалатов Сергей</a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано</span>
                        4 часа назад</span>
            </div>
            <h2 className={styles.title}>
                <a href="#post.url" className={styles.postLink}>
                    А также базовые сценарии поведения пользователей сервиса.
                </a>
            </h2>
        </div>
    );
}