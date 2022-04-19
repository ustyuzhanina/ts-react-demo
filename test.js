"use strict";
// let a: number = 5;
let b = 'common string';
// let c = true;
const d = ['a', 'b', 'c'];
//not recommended for use in production, as it suggests inability to safeguard the code from dynamic types
let e = 5;
e = 'dhfj';
function test(a) {
    return `${a} грибов в корзине`;
}
//| means alternative
function test1(a) {
    return `${a} грибов в корзине`;
}
//? means that some param may not be provided
function countCoord(coord) {
}
function markPoint(coord) {
}
//литеральный типы
let c = 'test';
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
//param type can have a combination of alternatives
function performComplexAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
//enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//могут быть строковые (без автоматического присваивания)
//могут быть гетерогенные (смешанные) enums, с присванием функции в качестве значения в том числе
//Tuple - кортеж
const a = [1, 'ffgfg', 0];
//можно использовать деструктуризацию и спред оператор для rest
//Generics добавляем <.....>, которые можно далее использовать в любом месте функции
function logTime(num) {
    console.log(new Date());
    return num;
}
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
