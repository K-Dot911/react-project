import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import axios from 'axios';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

export function CardsList() {
    const token = useSelector<RootState>(state => state.st.data?.token)
    const [posts, setPost] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadMoreButton, setLoadMoreButton] = useState(false);
    const [countOfLoading, setCountOfLoading] = useState(1);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState('');

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                const response = axios.get('https://oauth.reddit.com/rising/', {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit: 10,
                        after: nextAfter,
                    }
                }).then((r) => {
                    setPost(prevState => prevState.concat(...r.data.data.children));
                    setNextAfter(r.data.data.after);
                })

            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCountOfLoading(countOfLoading + 1);
                if ((countOfLoading % 4 !== 0) && loadMoreButton === false) {
                    load();
                } else {
                    setLoadMoreButton(true);
                    setCountOfLoading(1)
                }
            }

        }, {rootMargin: '100px'})


        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }

    }, [bottomOfList.current, nextAfter, token, loadMoreButton])

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !errorLoading && !loading && (
                <div style={{textAlign: "center"}}>Empty list of posts</div>
            )}

            {posts.map(post => (
                <Card
                    key={post.data.id}
                    author={post.data.author}
                    title={post.data.title}
                    created={post.data.created}
                    post_hint={post.data.post_hint}
                    url={post.data.url}
                    num_comments={post.data.num_comments}
                    ups={post.data.ups}

                />
            ))}

            <div ref={bottomOfList}/>
            {loading && <div style={{textAlign: "center"}}>Loading...</div>}
            {errorLoading && <div style={{textAlign: "center"}} role="alert">{errorLoading}</div>}
            {loadMoreButton && <button onClick={() => {
                setLoadMoreButton(false)
            }} className={styles.button}>Загрузить еще</button>}
        </ul>

    );
}
