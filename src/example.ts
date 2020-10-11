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



type StrangeTsTypes = any | unknow | never;

const some: any = '2'; // Типизация отключена и лучше не использовать данный тип.
some.reduce()

const un: unknow = '2'; //Говорим что потом определим тип.

if (typeof un === 'string') {
    un.concat();
}

function neverFn(): void {
}

const someValue = neverFn() // void

function neveFn2(): never { // Функция которая никогда не дойдет до конца.
    throw new Error('my exception')
}

const someValue2 = neveFn2()