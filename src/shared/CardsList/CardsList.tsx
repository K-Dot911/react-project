import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardsList() {
  const posts = useContext(postsContext)

  return (

  <ul className={styles.cardsList}>
    { posts.posts  != null ? posts.posts.map((item:any, index:number) =>
        <Card postData={item.data} key={index} /> ) : ''
    }
  </ul>

  );
}
