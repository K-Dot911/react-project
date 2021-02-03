import React from 'react';
import styles from './dropdown.css';

interface IDropDownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {
}

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropDownProps) {

    const [isDropDownOpen, setIsDropDownOpen] = React.useState(isOpen);
    React.useEffect(() => setIsDropDownOpen(isOpen), [isOpen]);
    React.useEffect(() => isDropDownOpen ? onOpen() : onClose(), [isDropDownOpen])

    const handleOpe = () => {
        if (isOpen === undefined) {
            setIsDropDownOpen(!isDropDownOpen)
        }
    }

    return (
        <div className={styles.container}>
            <div onClick={handleOpe}>
                {button}
            </div>
            {isDropDownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropDownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}

        </div>
    );
}
