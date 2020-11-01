import React from 'react';
import styles from './genericlist.css';

interface IItem {
 example: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }:IGenericListProps) {
  return (
    <ul className={styles.genericlist}>
      {list}
    </ul>
  );
}
