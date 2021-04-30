/*Таски на переменные:
1) Создайте две переменные a и b. Выведите в консоль результ их умножения.*/
const a = 10;
const b = 5;
console.log("1.Result of multiplication a*b :", a * b);

/*2) Создайте две переменные c и d. Выведите в консоль результат деления.*/
const c = 10;
const d = 5;
console.log("2.Result of division c/d :", c / d);


/*3) Создайте две переменные e и f. Выведите в консоль результат сложения.*/
const e = 10;
const f = 5;
console.log("3.Result of sum e+f :", e + f);


/*4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль*/
const g = 11;
console.log("4.",g);
const h = true;
console.log(h);
const j = 'java script';
console.log(j);
const k = '100';
console.log (k);

/*5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --*/
console.log("5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, -- let num = 1");
/*let num = 1;*/
let num = 1;
/*num = num + 11;
num = num - 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num - 1;*/
console.log("num = num + 11:num += 11 ", num += 11);
num = 1;
console.log("num = num - 11:num -= 11", num -= 11);
num = 1;
console.log("num = num * 11:num *= 11", num *= 11);
num = 1;
console.log("num = num / 11:num /= 11", num /= 11);
num = 1;
console.log("num = num + 1:num += 1", num += 1);
num = 1;
console.log("num = num - 1:num -= 1", num -= 1);


/*******************************************************************
Таски на prompt:
1) Запросить число у пользователя, возвести его в квадрат и вывести*/

let l = prompt( "Please, input any number:");
let m;
m = l * l;
alert(`The squared is ${m}!`);


/*2) Вывести среднее арифметическое двух чисел. Числа спрашивать у пользователя.
*/
let n = prompt( "Please, input first number:");
let o = prompt( "Please, input second number:");
alert(`The average is ${(+n + +o) / 2}!`)

/*3) Перевести число минут в секунды. Число спрашивать у пользователя.*/
let p = prompt("enter the number of minutes:");
alert(`It is ${p * 60} seconds`);


/*4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.*/

const  greeting = 'Hello, ';
let userName;
userName = prompt("Please, enter your name:");
alert (greeting + userName + ' !');

/******************************************************************
Таски на условия:
1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.*/

const i = 10;
let r = prompt('Guess the number:');
if (i === +r){
    alert('It is true!');
}else{
    alert ('It is false!');
};

/*2) Напишите две проверки.
Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
Проверьте работу скрипта при test, равном true, false.*/

let test = prompt('Enter true or false');
if (Boolean(test)) {alert ('Right');}
else { 
    alert('Wrong')};

const test1 = prompt ('Enter true or false');
if (!Boolean(test1)) {alert ('Right');}
else {
    alert('Wrong')
};



/*3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.*/

let sum = prompt( "Enter sum by check:");
if (sum > 500 && sum < 800){
    alert (`Your discount is 3% and sum to pay is ${(+sum)*0.97}`);
}else { if (sum >= 800){
    alert(`Your discount is 5% and sum to pay is ${(+sum)*0.95}`)
    } else{
        alert('Sorry, your check is without discount.');
    }
}


/******************************************************************
Таски на циклы. Каждую задачу решить всеми тремя циклами!
1) Вывод чисел от 25 до 0 (порядок уменьшения)*/
console.log('1.Цикл уменьшения. Вариант 1');

for (let i = 25; i >= 0; i--){
    console.log('i:', i);
};



console.log('1.Цикл уменьшения. Вариант 2');

let i5 = 25;
while( i5 >= 0){
    console.log('i5:', i5);
    --i5;
};

console.log('1.Цикл уменьшения. Вариант 3');

let i1 = 25;

do {
 i1--;
 console.log('i1:', i1);
} while (i1 > 0);


/*2)6 Вывод чисел от 10 до 50, которые кратны 5*/
console.log('1.Вывод чисел от 10 до 50, которые кратны 5. Вариант 1');

for (let i4 = 10; i4 <= 50; i4 += 5)
{
    console.log('i4:', i4);
};


console.log('1.Вывод чисел от 10 до 50, которые кратны 5. Вариант 2');
let i2 = 10;
while(i2 <= 50){
    console.log('i2:', i2);
    i2 += 5;
};


console.log('1.Вывод чисел от 10 до 50, которые кратны 5. Вариант 3');
let i3 = 10;

do {
 console.log('i3:', i3);
 i3 +=5;

} while (i3 <= 50);


/*3) Найти сумму чисел в пределах от 1 до 100.*/
console.log('1.Найти сумму чисел в пределах от 1 до 100. Вариант 1');

let result1 = 0;
     for (let x = 0; x <= 100; x++) {
         result1 += x;
      }
console.log('result1:', result1)
      
console.log('2.Найти сумму чисел в пределах от 1 до 100. Вариант 2');

let result2 = 0;
let x1 = 0
while( x1 <= 100){
result2 += x1;
x1++;
};
console.log('result2:', result2);

console.log('3.Найти сумму чисел в пределах от 1 до 100. Вариант 3');
let result3 = 0;
let x3 = 0;
do {
    result3 += x3;
    ++x3;
} while (x3 <= 100);
console.log("result3:", result3);



/*4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решить*/
/*1*/

let required = prompt('Find (2+2*2):');
     for (let y = 6; y != Number(required); required = prompt('Find (2+2*2):'));
     alert('Great! you are right!');

/*2*/
const y1 = 6;
 let required1 = prompt('Find (2+2*2):');
 while (y1 != Number(required)) {
    required1 = prompt('Find (2+2*2):');
 }
 alert('Great! You are right!');
 /*3*/
 const y3 = 6;
 let required2 = 0;
 do{
     required2 = prompt('Find (2+2*2)');
 }
 while( y3 != required2);
 alert('Great! You are right!');

