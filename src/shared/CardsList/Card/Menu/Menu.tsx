import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {merge} from "../../../../utils/js/merge";
import {generateId, generateRandomString} from "../../../../utils/react/generateRandomIndex";
import {MenuIcon} from "../../../Icons/MenuIcon";

const LIST = [
    {As: 'li' as const, text: 'Комментарии', className: "comment"},
    {As: 'li' as const, text: 'Поделиться', className: "shared"},
    {As: 'li' as const, text: 'Скрыть', className: "hide"},
    {As: 'li' as const, text: 'Сохранить', className: "save"},
    {As: 'li' as const, text: 'Пожаловаться', className: "complain"},
    {As: 'li' as const, text: 'CommentIcon', className: "close"}
].map(generateId) // Вынесена за пределы компонента что бы id были сгенерированы один раз и потом не менялись.

export function Menu() {
    const [list, setList] = React.useState(LIST)
    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id !== id));
    // }
    const handleAdd = () => {
        setList(list.concat(generateId({icon: '123', text: generateRandomString(), As: 'li' as const, className: 'string'})))
    }
    // <button onClick={handleAdd}>Add Element</button>
    return (
        <div className={styles.menu}>
            <Dropdown
                // onClose={() => console.log('on close')}
                // onOpen={() => console.log('on open')}
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <ul className={styles.menuList}>
                    {/*<GenericList list={list.map(merge({onClick: handleItemClick}))}/>*/}
                    <GenericList list={list}/>
                </ul>
            </Dropdown>
        </div>
    );
}
