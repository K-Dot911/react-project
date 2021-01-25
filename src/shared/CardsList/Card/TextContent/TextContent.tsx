import React from 'react';
import styles from './textcontent.css';
import moment from 'moment'
import {Title} from "./Title";
import {Controls} from "../Controls";

// interface ITextContentInterface {
//     avatarUrl: string;
//     avatarAlt: string;
//     authorName: string;
//     postDate: string;
//     postTitle: string;
//     postUrl: string;
//     postHint: string;
//     postKarma: number;
// }
//
// export function TextContent({avatarUrl, avatarAlt, authorName, postDate, postTitle, postUrl, postHint, postKarma}: ITextContentInterface) {
//
//     return (
//         <div className={styles.textContent}>
//             <div className={styles.metaData}>
//                 <div className={styles.userLink}>
//                     <img className={styles.avatar}
//                          src={avatarUrl ? avatarUrl : 'https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'}
//                          alt={avatarAlt}
//                     />
//                     <a href="#user-url" className={styles.username}>{authorName}</a>
//                 </div>
//                 <span className={styles.createdAt}>
//                         <span className={styles.publishedLabel}>опубликовано</span>
//                     {moment(postDate).format("DD-MM-YYYY h:mm:ss")}</span>
//             </div>
//          <Title  postHint={postHint} postTitle={postTitle} avatarUrl={avatarUrl} authorName={authorName} avatarAlt={avatarAlt} postUrl={postUrl} postDate={postDate} postKarma={postKarma}/>
//         </div>
//     );
// }

interface ITextContentInterface {
    title: string;

}

export function TextContent({title}: ITextContentInterface) {

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar}
                         src='https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'
                    />
                    <a href="#user-url" className={styles.username}>TEST</a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>опубликовано</span>
                    12 часов назад</span>
            </div>
         <Title title={title}/>
        </div>
    );
}
