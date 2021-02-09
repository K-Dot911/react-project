import React, {useEffect} from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch} from "react-redux";
import {saveToken} from "../../store/st/actions";

export function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token') !== 'undefined') {
            dispatch(saveToken({token: localStorage.getItem('token')}));
        } else if (window.__token__ && window.__token__.length > 10) {
            dispatch(saveToken({token: window.__token__}));
            localStorage.setItem('token', window.__token__);
        } else {
            console.log('Token is empty')
        }
    }, [])
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
