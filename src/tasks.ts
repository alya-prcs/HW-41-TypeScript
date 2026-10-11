// export {} робить файл модулем, тому імена на кшталт `name`
// не конфліктують з глобальними змінними з lib.dom
export {};

// ───────────── Завдання 1 ─────────────

// 1) Типи для «класичних» js-змінних
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

// 2) Змінна, в яку можна покласти будь-що
let anything: any = -20;
anything = 'Text';
anything = {};

// 3) unknown: перед присвоєнням у string потрібно звузити тип
let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
  str = some;
}

// 5) Незмінний кортеж із суворими типами
const person: readonly [string, number] = ['Max', 21];

// 6) enum зі статусом завантаження
enum LoadStatus {
  LOADING = 'LOADING',
  READY = 'READY',
}
let currentStatus: LoadStatus = LoadStatus.LOADING;

// 7) Рядок або число
let stringOrNumber: string | number = 'abc';
stringOrNumber = 42;

// 8) Лише одне зі значень 'enable' | 'disable'
type Switch = 'enable' | 'disable';
let switchState: Switch = 'enable';

// 9) Типи для функцій
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// 10) Власний тип на основі наявних даних
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

// ───────────── Перевірка (для debugging) ─────────────
showMessage(`${name}, ${age}, ${toggle}, ${empty}, ${notInitialize}`);
showMessage(`callback(1) = ${callback(1)}, calc(2, 3) = ${calc(2, 3)}`);
showMessage(`person: ${person.join(', ')}`);
showMessage(`status: ${currentStatus}, switch: ${switchState}`);
showMessage(`str: ${str!}, stringOrNumber: ${stringOrNumber}`);
showMessage(`${page1.title} (${page1.status}), ${page2.title} (${page2.status})`);
