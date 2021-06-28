let str = 'Give 100%'

//find any digit
console.log(str.match(/\d/g));

//find whitespace
console.log(str.match(/\s/g));

//find a word at the end or beginning of a wprd
let str2 = 'Hello there. Look at you'
// at the beginning of a word
console.log(str2.search(/\bLo\b/gi));

//give the unicode character
console.log(str2.search(/\u004F/g));

let str3 = 'Hello world, hello codify look'

//find one or more letter
console.log(str3.match(/lo*/g));

// find zero or more 
console.log(str3.match(/lo*/g));

let str4= 'r213, 4 or 1000$'

// find zero or one 
console.log(str4.match(/1000?/g)); // find 100 or 1000 

// find n at the begnning at the string 

console.log(str4.match(/^r21/gi));


// find n at the end of the string

console.log(str4.match(/00\$$/gi));
