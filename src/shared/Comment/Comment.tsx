import React, {useState} from 'react';
import styles from './comment.css';
import {AnswerForm} from "./AnswerForm";


interface ICommentInterface {
    name: string,
}

export function Comment({name}: ICommentInterface) {
    const [isAnswerFormOpened, setIsAnswerFormOpened] = useState(false);

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
                <div className={styles.headerWrapper}>
                    <div className={styles.userLink}>
                        <img className={styles.avatar}
                             src='https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'
                        />
                        <a href="#user-url" className={styles.username}>{name}</a>
                    </div>
                    <span className={styles.createdAt}>
                <span className={styles.publishedLabel}>опубликовано 12.12.2021</span>
              </span>
                </div>
                <div>
                    <p className={styles.commentText}>Сторонники тоталитаризма в науке будут объективно рассмотрены
                        соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные
                        исследования будут описаны максимально подробно. </p>
                </div>
                <div className={styles.buttonSection}>
                    <button className={styles.button} onClick={() => {
                        setIsAnswerFormOpened(!isAnswerFormOpened)
                    }}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.75 0.416504H1.41667C0.6375 0.416504 0 1.054 0 1.83317V10.3332C0 11.1123 0.6375 11.7498 1.41667 11.7498H11.3333L14.1667 14.5832V1.83317C14.1667 1.054 13.5292 0.416504 12.75 0.416504ZM11.3333 8.9165H2.83333V7.49984H11.3333V8.9165ZM11.3333 6.7915H2.83333V5.37484H11.3333V6.7915ZM11.3333 4.6665H2.83333V3.24984H11.3333V4.6665Z"
                                fill="#999999"/>
                        </svg>
                        <span className={styles.buttonDescription}>Ответить</span>
                    </button>
                    <button className={styles.button}>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
                                fill="#999999"/>
                        </svg>
                        <span className={styles.buttonDescription}>Поделиться</span>
                    </button>
                    <button className={styles.button}>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z"
                                fill="#999999"/>
                        </svg>
                        <span className={styles.buttonDescription}>Пожаловаться</span>
                    </button>
                </div>
                {isAnswerFormOpened && (
                    <AnswerForm name={name}/>
                )}
            </div>

        </div>
    );
}
