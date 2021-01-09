import React, {useState} from 'react';
import styles from './title.css';

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
            <div>Открытый пост</div>
        )}
      </h2>
  );
}
