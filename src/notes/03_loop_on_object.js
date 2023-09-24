// LOOP ON OBJECTS:

const myObj = {
  a: "Arsh",
  b: 1,
  c: false,
};

/*

console.log(myObj); // It prints the whole object
console.log(myObj.b); // It prints the single value of B

*/

// IF WE WANT TO PRINT THE WHOLE VALUES IE KEY AND VALUE
// [Agr array hota toh for loop use krte]

/*
// 1) Object.keys [Object is direct accessor of class]

const arrayObj = Object.keys(myObj) [basically properties ke name ko get krke dedeta h in one time in array]
console.log(arrayObj); // Object.keys this will give array with keys

arrayObj.forEach((key) => {  // key is a, b, c 
    return console.log(key + " : " + myObj[key]); 
})

*/

// =======================================================================

/*
// 2) WE WANT THE VALUES OF PROPERTY VALUES DIRECTLY [Upr bhi humne get krri hai , but direct get krege]

let values = Object.values(myObj); // It gives the array, with all the values of object
console.log(values);
*/

// =======================================================================

// 3) Object Entries

let entries = Object.entries(myObj); // It gives the nested array, har row ko 1 array me dal dega means keys and vlues ko so nested array, 

for (const [key, val] of entries) { // Note -> 1) agr simple const key of entries - ye likhege toh sari rows print hojayei  
    console.log(key, val);  // 2) agr [key] ye likheg, toh destructure krke first value nikal li, ie keys
}                           // 3) agr [key, value] : ye dono likhege toh key value pair me pura print hojayega
// console.log(entries);
