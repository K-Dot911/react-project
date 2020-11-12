import React from 'react';
import styles from './menulistitem.css';
import {Dropdown} from "../../../../Dropdown";
import {ComentIcon, SharedIcon, MaskIcon, SavedIcon, ComplainIcon} from "../../../../Icons";

// const LIST = [
//     {As: 'li' as const, icon: ComentIcon, text: 'Комментарии', className: "comment"},
//     {As: 'li' as const, icon: SharedIcon, text: 'Поделиться', className: "shared"},
//     {As: 'li' as const, icon: MaskIcon, text: 'Скрыть', className: "hide"},
//     {As: 'li' as const, icon: SavedIcon, text: 'Сохранить', className: "save"},
//     {As: 'li' as const, icon: ComplainIcon, text: 'Пожаловаться', className: "complain"},
//     {As: 'li' as const, text: 'Закрыть', className: "close"}
// ].map(generateId) // Вынесена за пределы компонента что бы id были сгенерированы один раз и потом не менялись.

interface IMenuItemsListProps {
  postId: string;
}

export function MenuListItem({postId}: IMenuItemsListProps) {
    // const [list, setList] = React.useState(LIST)
    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id !== id));
    // }
    // const handleAdd = () => {
    //     setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const, className: 'string', icon: MaskIcon})))
    // }
    // <button onClick={handleAdd}>Add Element</button>
    return (
        // onClose={() => console.log('on close')}
        // onOpen={() => console.log('on open')}
        <ul className={styles.menuList}>
            <li onClick={() => console.log({postId})}><ComentIcon/>Комментарии</li>
            <li><SharedIcon/>Поделиться</li>
            <li><MaskIcon/>Скрыть</li>
            <li><SavedIcon/>Сохранить</li>
            <li><ComplainIcon/>Пожаловаться</li>
            <li>Закрыть</li>
        </ul>
    );
}

{/*<ul className={styles.menuList}>*/
}
{/*    /!*<GenericList list={list.map(merge({onClick: handleItemClick}))}/>*!/*/
}
{/*    /!*<GenericList list={list}/>*!/*/
}
{/*</ul>*/
}