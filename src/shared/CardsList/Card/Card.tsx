import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent"
import {Controls} from "./Controls";
import {Menu} from "./Menu";

interface ICardsProps {
    title: string;
    created: string;
    author: string;
    url: string;
    post_hint: string;
    num_comments: number;
    ups: number;
}

export function Card({title, created, author, url, post_hint, num_comments, ups}: ICardsProps) {
    return (
        <li className={styles.card}>
            <TextContent title={title} author={author} created={created} post_hint={post_hint}/>
            <div className={styles.preview}>
                {post_hint === 'image' ? <img className={styles.previewImg} src={url}/> :
                    <img className={styles.previewImg}
                         src='https://linkbuilder.su/images/uploads/glossary/ssilka.jpg'/>}
            </div>
            <Menu/>
            <Controls num_comments={num_comments} ups={ups}/>
        </li>
    );
}
