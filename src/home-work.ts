// 1. Работа с простыми типами
//
// Напишите тип функции, конкатенирующей две строки

function concat(firstArg: string, secondArg: string): string {
    return (firstArg + ' ' + secondArg);
}

concat('Hello ', 'World') // -> Hello World;


// 2. Работа с интерфейсами
//
// Напишите интерфейс для описания следующих данных

interface MyHomeTaskInterface {
    howIDoIt: string,
    simeArray: Array<string | number>,
    withData: {howIDoIt: string, simeArray: (string | number)[]}[]
}
const MyHometask: MyHomeTaskInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
}

// 3. Типизация функций, используя Generic
//
// В уроке про Generics мы написали интерфейс массива MyArray
//
// interface MyArray<T> {
//
//     [N: number]: T;
//
//     добавьте типизацию для метода reduce
//
//     reduce();
// }


const myArray: Array<number> = [1,2,3];

interface MyArray<T> {
    [N: number]: T
    reduce<U>(fn: (accumulator: U, value: T) => U, initialValue: U): U;
}

const initialValue = 5;
myArray.reduce((accumulator, value) => accumulator + value, initialValue); // -> 11



// 4. Работа с MappedTypes
interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

const homeTask2: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}