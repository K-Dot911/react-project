import React, {useEffect} from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch} from "react-redux";
import {setToken} from "../../store/reducer";
import {saveToken, stRequestAsync} from "../../store/st/actions";

export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {

    if (window.__token__) {
      dispatch(stRequestAsync())
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
