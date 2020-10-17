// import * as React from 'react';

//JS Types //typeof

const str = 'string'    // typeof str   ->  'string'
const num = 2;          // typeof num   ->  'number'
const nan = NaN;        // typeof nan   ->  'number'
const obj = {};         // typeof obj   ->  'object'
const arr = [];         // typeof arr   ->  'object'
const nul = null;       // typeof nul   ->  'object'
const sym = Symbol();   // typeof sym   ->  'symbol'
const und = undefined;  // typeof und   ->  'undefined'
const _void = void 0;   // typeof _void ->  'undefined'
const bool = true;      // typeof bool  ->  'bo0lean'
const fn = () => {};    // typeof fn    ->  'function'

let tsStr = 'asd';

// function sunJs(arr) {
//     return arr.concat([1]);
// }

function sumTs(arr: number[]) {
    return arr.reduce((a: number, b:number) => a + b);
}

// 'some' + 2 // -> 'some2'
// 'some' - 2 // -> NaN
// '2' + 2 -> '22'
// '2' - 2 -> NaN

const  tsNumber = 2;
const  tsString = 'str'

const result = tsString + tsNumber

const resultTwo = parseInt(tsString) - tsNumber


//  Union type
const strOrNumber: string | number = '2'


//  Type Alias
type StrOrNumber = string | number

const strOrNumber2: string | number = '2'
const strOrNumber3: string | number = '2'
const strOrNumber4: string | number = '2'

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;


//  Array
const tsArray: number[] = [1, 2, 3];

const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, '3'];

const unionArray2: Array<string | number> = [1, 2, '3']


//  Tuple (фиксированая ширина, в данном примере все 1 элемент будет число и 2 строка.
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple; // Применили деструкцию.

//  Пример использования в React.
//  const [state, setState] = useState();


// Object
type MyObjType = { a: number, b: string}
const myObj: MyObjType = {a: 1, b: '2'}

interface MyFirstInterface { // Предпачтитиельно использовать с обьекатми
    readonly a: number;
    b: string;
    c: number[];
    d?: boolean; //optionally type
    e: number | undefined;
}

const  muObj2: MyFirstInterface = {
    a: 0,
    b: "123",
    c: [1, 2, 3],
    d: false, // ?  Опциональный знак, не обязательно декларировать значение.
    e: 1 // Обязательно либо чило либо undefined как в интерфейсе.
}

// Пример с API когда мы не не хотим типизировать n-ое кол-во ключей.

const  ApiAnswer: IndexInterface = {key: 'asd' , key2: 'asd'};

//Index Signature

const val3 = ApiAnswer.randomkey;

interface IndexInterface {
    [n: string]: string; // [key: string] : string;
}


// calculate('add', 5, 5) // -> 10
function calculate(method: 'add' | 'sub', left: number, right: number): number {
    switch (method) {
        case 'add': return left + right;
        case 'sub': return left - right;
    }
}


// Вариант с использованием enum

enum Methods {
    add,
    sub,
}

function calculate2(method: Methods, left: number, right: number): number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}


//  Type alias для функций  (Предпачтитлеьно использовать с функциями)

const ArrowFn: TypeFn = () => 2;

type TypeFn = () => number;

// Interface для функции

const ArrowFn2: FnInterface = (value) => 2;

interface FnInterface {
    (a: number) : void;
}



// type StrangeTsTypes = any | unknow | never;

// const some: any = '2'; // Типизация отключена и лучше не использовать данный тип.
// some.reduce()

// const un: unknow = '2'; //Говорим что потом определим тип.

// if (typeof un === 'string') {
//     un.concat();
// }

function neverFn(): void {
}

const someValue = neverFn() // void

function neveFn2(): never { // Функция которая никогда не дойдет до конца.
    throw new Error('my exception')
}

const someValue2 = neveFn2()

//Generics

// const myArray: Array<number> = [1,2,3];
//
//
// interface MyArray<T> {
//     [N: number]: T
//     map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): U[]
// }
//
// myArray.map((f, index, arr) => f + 1); // [2,3,4]
// myArray.map((f) => `f + ${f}`); // ['f + 1', 'f + 2' ...]


// const myNewArray = [1, 2, 3]
//
// myNewArray.map((f) => f + 1); // [2,3,4]
// myNewArray.map((f) => `f + ${f}`); // ['f + 1', 'f + 2' ...]



function identity<T>(arg: T): T {
    return arg
}

let result2 = identity(12);


function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}

getLen([1,2,3])


interface IValueWithType<T> { //I Венгерская натация
    type: string;
    value: T;
}


function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof  arg,
        value: arg
    }
}

const result3 = withType(123);

//Встроенные generics

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = { // Нужен для того что бы удалять ключи из интерфейса.
    type: '123' // Осталось только ключ type
}

const picked: Pick<IExample<number>, 'isEmpty'> = { // В удаляет а забирает ключи из интерфейса который передали.
    isEmpty: true,
}
const partial: Partial<IExample<object>> = { // Делает все ключи не обзяательными то есть добавляет знак вопроса перед знвачением в интерфейсе который передали.
     // type?: string; //В коде будет if
    //  value?: T;
    //  isEmpty?: boolean;
}


// Class ES6

// TS вводит модификаторы достпуа public, protected, private

class Constructor {
    public filed: number = 123;
    private privateField: number = 123;

    constructor(arg: number) {
        this.filed = arg;
    }

    public publicMethod(): number { // Public значение по умолчанию
        return this.filed
    }

    protected  protectedMethod() {
        return this.filed + 10;
    }

    private privateMethod() {  // Не доступен в наскледниках
        return this.filed + 30;
    }
}

const instance = new Constructor(123); //Нет доступа как protected  и  private


// Насоедование классов ES6
class Child extends  Constructor {

    public childMethod() {
        // this.protectedMethod()
        // this.publicMethod()
    }

    protected protectedMethod(): number { //Нельзя понижать уровень доступа (Не можем сделать из )
        return super.protectedMethod();
    }
}

//Абстрактные классы

abstract class AbstractClass {
    public abstract  abstractField: number;

    public abstract  abstractMethod(): number;

    protected protectedMethod() {
        return this.abstractField;
    }
}

// WRONG const instance2 = new AbstractClass(); // Нельзя сделать instance только наследование

class NewChild extends AbstractClass {
    public abstractField: number = 2;

    public abstractMethod(): number {
        return this.protectedMethod();
    }
}

// Implements

interface MyInterface<T> {
    field: string;
    method(): string;
}

class NewClass<T> implements MyInterface<T> {
    field: string = '123'
    public conf?: T;

    method(): string {
        return "";
    }
}


// Пример испозльзования в React

// class MyComponent extends React.Component<{prop1: number}, {state1: string}> {
//     constructor(props) {
//         super(props);
//         this.state = {
//             state1: '123'
//         }
//     }
//     public render() {
//         return (
//             <div>{this.props.prop1}</div>
//         )
//     }
// }


const mistake = [] as Array<number>; // Кастинг, специальное приведение к типу
mistake.push(1);
// mistake.push('2')

let markets =  {
        "name": "BTC/USD",
        "base": "BTC",
        "quote": "USD",
        "last": 11340.2,
        "change": -0.02,
        "price_scale": 1,
        "description": "Bitcoin",
        "qty_scale": 2,
        "open": 11342.6,
        "turnover": 10775.415,
        "turnover_usd": 1.22134609618E8,
        "open_interest": 8032.8,
        "open_interest_btc": 8032.8,
        "category": "CRYPTO",
        "price": 11340.2,
        "change24h": -0.02,
}

type TMBigObject = typeof markets;

const typedBigObject: Readonly<TMBigObject> = markets;

type TObjKeys = keyof TMBigObject;


type MyReadonly = {
    // readonly [N in 'asd' | 'qwe']: N
    readonly [N in keyof TMBigObject]: N
}

// for (let N of ['asd','qwe']){}




