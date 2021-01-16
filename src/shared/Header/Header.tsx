import React, {useEffect} from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState, setToken} from "../../store";

export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__))
    }

  }, [])
  return (
  <header className={styles.header}>
    <SearchBlock />
    <ThreadTitle />
    <SortBlock />
  </header>
  );
}
