import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css'

function HeaderComponent() {
    return (
        <header>
            <h1 className={styles.example}>Hello world</h1>
            <p>123</p>
        </header>
    )
}


export const Header = hot(HeaderComponent);