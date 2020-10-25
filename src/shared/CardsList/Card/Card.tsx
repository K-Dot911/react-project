import React from 'react';
import styles from './card.css';

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.texContent}>

                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img className={styles.avatar}
                             src="https://sagalatov.github.io/portfolio/img/photo.jpg"
                             alt="avatar"
                        />
                        <a href="#user-url" className={styles.username}>Сагалатов Сергей</a>
                    </div>
                    <span className={styles.createdAt}>4 часа назад</span>
                </div>
                <h2 className={styles.title}>
                    <a href="#post.url" className={styles.postLink}>
                        А также базовые сценарии поведения пользователей сервиса.
                    </a>
                </h2>
            </div>

            <div className={styles.preview}>
                <img className={styles.previewImg}
                     src="https://cdn.dribbble.com/users/1421201/screenshots/14453037/media/264230b1f5a45f1ef74c005746d8ee9f.jpg"
                     alt="post image"
                />
            </div>

            <div className={styles.menu}>
                <button className={styles.menuButton}>
                    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#F3F3F3"/>
                        <circle cx="2.5" cy="10" r="2.5" fill="#F3F3F3"/>
                        <circle cx="2.5" cy="17.5" r="2.5" fill="#F3F3F3"/>
                    </svg>
                </button>
            </div>
            <div className={styles.controls}>
                <div className={styles.karmaCounter}>
                    <button className={styles.up}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                    <span className={styles.karmaValue}>500</span>
                    <button className={styles.down}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                </div>

            </div>
        </li>
    );
}
