let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = boolean (isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// "" => false
// "palak" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof someNumber);

// *********************operations********************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3);
// console.log(2/4);
// console.log(2%5);

let str1 = "hello"
let str2 = " palak"
let str3 = str1+str2
console.log(str3);