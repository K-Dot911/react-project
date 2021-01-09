import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

interface ITitleInterface {
  postHint: string;
  postTitle: string;
  postUrl: string;

}

export function Title({postHint, postTitle, postUrl}: ITitleInterface) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
      <h2 className={styles.title}>
        {postHint === 'image' ? <span className={styles.postLink}>{postTitle}</span> : <a onClick={() => {
          setIsModalOpened(true)} } className={styles.postLink}>
          {postTitle}
        </a> }

        {isModalOpened && (
            <Post onClose={() => {setIsModalOpened(false);}} />
        )}
      </h2>
  );
}
