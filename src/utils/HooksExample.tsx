//Hooks

//1. useState
//2. useEffect Жизненный цикл в одной функции
//3. useRef
//4. useReducer
//5. useMemo
//6. useContext
//7. useCallBack
//8. useImperativeHandle
//9. useLayoutEffect
//10. useDebugValue

import React from "react";

export function MyHooks({title} : {title: string}) {
    React.useEffect(() => {
        console.log('componentDidMount');
        console.log('componentDidUpdate');
    });

    React.useEffect(() => {
        console.log('componentDidMount');
        return () => {
            console.log('componentWillUnmount') // Возвращаяемая функция из useEffect есть аналог WillUnmount
        }
    }, []); // Use effect с пустым массивом deps это аналог DidMount (Выполниться один раз, не будет следить за обновлениями)

    React.useEffect(() => {
        console.log('componentWillReceiveProps', title);
    }, [title]); // В таком случае Use effect следит за изменением title. (Выполниться сменив пустое значение на то что мы заддим и каждй раз при изменении  title)


    return (
        <div>{title}</div>
    )
}

//Пример использования useMemo (Схожая логика работы как и useEffect, вызывается 1 раз и спользуется для вычеслений)

export function MyHooksMemo({title, id} : {title: string, id?: string}) {
    const items = 10
    const multiplier = 5
    const result = React.useMemo(
        () => {
            console.log('CALC')
            calculate(items, multiplier);
        },
        [items, multiplier]
    )

    return (
        <div>{title} {id} {result}</div>
    )
}

function calculate(items: number, multiplaer: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplaer);
}

//Пример кастомного Хука (Принято называть хук с слова use)

export function useIsMounted() {
    const [isMounted, setIsMounted ] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, [])

    return [isMounted] // Можно вернуть любую конструкцию но в реакте принято возвращать массив значений
}