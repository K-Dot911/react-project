import React, {useContext} from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent"
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {Dropdown} from "../../Dropdown";
import {MenuIcon} from "../../Icons";
import {MenuListItem} from "./Menu/MenuListItem";

interface ICardsProps {
    postData: any;
}

export function Card({postData}: ICardsProps) {
    return (
        <li className={styles.card}>
            <TextContent avatarUrl={postData.sr_detail.header_img}
                         avatarAlt={postData.sr_detail.display_name}
                         authorName={postData.author}
                         postDate={postData.created_utc}
                         postTitle={postData.title}
                         postUrl={postData.url}
                         postHint={postData.post_hint}
                         postKarma={postData.ups}

            />
            <div className={styles.preview}>
                {postData.post_hint === 'image' ? <img className={styles.previewImg} src={postData.url} /> : ''}
            </div>
            <Menu />
            <Controls postComments={postData.num_comments}
                      postKarma={postData.ups}
            />
        </li>
    );
}
