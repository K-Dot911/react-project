import React from 'react';
import styles from './burgermenu.css';
import {Dropdown} from "../../../../Dropdown";
import {GenericList} from "../../../../GenericList";
import {merge} from "../../../../../utils/js/merge";
import {generateId, generateRandomString} from "../../../../../utils/react/generateRandomIndex";

const LIST = [
    {As: 'li' as const, text: 'Комментарии', className: "comment"},
    {As: 'li' as const, text: 'Поделиться', className: "shared"},
    {As: 'li' as const, text: 'Скрыть', className: "hide"},
    {As: 'li' as const, text: 'Сохранить', className: "save"},
    {As: 'li' as const, text: 'Пожаловаться', className: "complain"},
    {As: 'li' as const, text: 'Закрыть', className: "close"}
].map(generateId) // Вынесена за пределы компонента что бы id были сгенерированы один раз и потом не менялись.

export function BurgerMenu() {
    const [list, setList] = React.useState(LIST)
    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id !== id));
    }
    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const, className: 'string'})))
    }
    return (
        // <button onClick={handleAdd}>Add Element</button>
        <div>
            <Dropdown
                // onClose={() => console.log('on close')}
                // onOpen={() => console.log('on open')}
                button={
                    <button className={styles.burgerMenuButton}>
                        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#F3F3F3"/>
                            <circle cx="2.5" cy="10" r="2.5" fill="#F3F3F3"/>
                            <circle cx="2.5" cy="17.5" r="2.5" fill="#F3F3F3"/>
                        </svg>
                    </button>
                }
            >
                <ul className={styles.burgerMenuList}>
                    <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
                </ul>
            </Dropdown>
        </div>
    );
}
