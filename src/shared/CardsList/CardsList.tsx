import React, {useContext, useEffect, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import axios from 'axios';
import {postsContext} from "../context/postsContext";
import {meRequestError, meRequestSuccess} from "../../store/me/actions";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

export function CardsList() {
    // const posts = useContext(postsContext)
    const token = useSelector<RootState>(state => state.st.data?.token)
    const [posts, setPost] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');

    useEffect(() => {
        if (!token) return;

        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                const response = axios.get('https://oauth.reddit.com/rising/', {
                    headers: {Authorization: `bearer ${token}`}
                }).then((r) => {
                    setPost(r.data.data.children);
                })

            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
        }

        load()
    }, [token])

    return (
        <ul className={styles.cardsList}>
          {posts.length === 0 && !errorLoading && !loading && (
              <div style={{textAlign: "center"}}>'Empty list of posts'</div>
          )}

            {posts.map(post => (
                <Card
                    key={post.data.id}
                    title={post.data.title}
                />
            ))}
            {loading && <div style={{textAlign: "center"}}>'Loading...'</div>}

            {errorLoading && <div style={{textAlign: "center"}} role="alert">{errorLoading}</div>}

        </ul>

    );
}
