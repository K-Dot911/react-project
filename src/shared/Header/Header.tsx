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
        dispatch(saveToken({token: window.__token__}));
    }, [])
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
