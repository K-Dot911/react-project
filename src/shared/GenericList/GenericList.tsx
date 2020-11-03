import React from 'react';
import styles from './genericlist.css';

interface IItem {
 value: string;
 id: string;
 onClick: (id: string) => void;
}

interface IMyListProps {
  list: IItem[];
}

export function MyList({ list }: IMyListProps) {
  return (
    <ul>
        {list.map((item) => (
            <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
        ))}
    </ul>
  );
}
