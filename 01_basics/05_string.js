const name = "palak"
const repoCount = 50

// console.log(name + repoCount + "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('palak-hc-com')

console.log(gameName[0]);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf(`l`));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newStringOne = "      palak       "
console.log(newStringOne);
console.log(newStringOne.trim())

const url =  "https://palak.com/palak%20sharma"

console.log(url.replace('%20', '-'))

console.log(url.includes('palak'))

console.log(gameName.split('-'));