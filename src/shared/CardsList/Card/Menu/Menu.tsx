import React from 'react';
import styles from './menu.css';

export function Menu() {
  return (
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#F3F3F3"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#F3F3F3"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#F3F3F3"/>
          </svg>
        </button>
      </div>
  );
}
