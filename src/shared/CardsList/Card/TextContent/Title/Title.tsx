import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

// interface ITitleInterface {
//   postHint: string;
//   postTitle: string;
//   postUrl: string;
//   avatarUrl: string;
//   avatarAlt: string;
//   authorName: string;
//   postDate: string;
//   postKarma: number;
// }
//
// export function Title({postHint, postTitle, authorName, avatarAlt, avatarUrl, postDate, postKarma}: ITitleInterface) {
//   const [isModalOpened, setIsModalOpened] = useState(false);
//
//   return (
//       <h2 className={styles.title}>
//         {postHint === 'image' ? <span className={styles.postLink}>{postTitle}</span> : <a onClick={() => {
//           setIsModalOpened(true)} } className={styles.postLink}>
//           {postTitle}
//         </a> }
//
//         {isModalOpened && (
//             <Post onClose={() => {setIsModalOpened(false);}} authorName={authorName} avatarUrl={avatarUrl} avatarAlt={avatarAlt} postDate={postDate} postKarma={postKarma} postTitle={postTitle} />
//         )}
//       </h2>
//   );
// }

interface ITitleInterface {
    title: string;
    post_hint: string;
}

export function Title({title, post_hint}: ITitleInterface) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
      <h2 className={styles.title}>
          {post_hint === 'image' ? <span className={styles.postLink}>{title}</span> : <a onClick={() => {
              setIsModalOpened(true)} } className={styles.postLink}>
              {title}
          </a> }

        {isModalOpened && (
            <Post onClose={() => {setIsModalOpened(false);}} />
        )}
      </h2>
  );
}
