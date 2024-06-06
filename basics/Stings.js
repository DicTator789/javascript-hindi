const name = new String("dictator") //---------------------- declaring as objeccs
const value = " hello"   // behind the scenes they are objects

// old way
console.log(name + value);

//modern way
console.log(` Hello my name is ${name[0]} and my value is ${value[2]} ${name}`);


// string methods 

console.log(name.__proto__)      //--------------------gives prototype as string is decalred object it gives "{}" as an output which is object and "[]" in case of array
console.log(name.length)     

console.log(name.toUpperCase());
console.log(name.charAt(2));  // gives out character at given index

console.log(name.indexOf('t'));  // gives out index of given character

let char ="t"

const value2 =name.search(char)  // gives out index of given character
console.log(value2);

const namesub = name.substring(0,4) // provides substring but -ve index are not allowed
console.log(namesub);

const another = name.slice(-6,4) // gives out sliced index and -ve index are allowed
console.log(another);

const newstring = "               dc           "
console.log(newstring);
console.log(newstring.trim());  // trim white spaces but cannot trim new line character /n

const url = "https://www.dc.com/dc%20dictator"
console.log(url.replace('%20',' -'));  //---- replaces %20 with -
console.log(url.includes('dc'));  //----------if there si dc in url it gives true

//------------------------string to array-----------

const gamename = "sekiro- ghost- of- tsushima"
console.log(gamename.split('-'));