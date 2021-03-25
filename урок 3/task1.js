// 1. Сделать собственные примеры методов применяемых для массивов.

//  Join

const automobiles = ['car' , 'bus' , 'underground'];

console.log(automobiles.join()); // "car','bus','underground"

console.log(automobiles.join(' ')); // "car,bus,underground"

console.log(automobiles.join('-'));// "car-bus-underground"

// concat

var color = ["red", "yellow", "black"];

var animals = ["dog", "bird", "monkey"];

var color = color.concat(animals);

console.log(color); 

//  reverse

let numbers = ["1, 2, 3, 4, 5, 6"];

numbers = numbers.reverse();

console.log(numbers); 

//  slice

var stuff = ["bottle", "paper", "socks", "clothes"];

var trash = stuff.slice(1, 3);
console.log(trash);


// splice

var nature = ["plants", "flowers", "trees", "gloves",];

var trash = nature.splice(2, 4);
console.log(trash);
console.log(nature);

//  sort

var numbers = [44, 55, 66, 77, 88];

numbers.sort();
console.log(numbers);

var letters = ["c, z, h, o, v, a, q"];
letters.sort();
console.log(letters);

//  push

var numbers = [12, 5, 7, 3, 52, 23];

var all = numbers.push(['c, z, h'],['v, a, q']);

console.log(all); 
 

// shift

var heroes = ["pantera", "batman", "spider-man", "superman"];

var trash = heroes.shift();

console.log(trash);