// Part 1: Fizz Buzz
let i = 1;
while (i <= 100) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FIZZ BUZZ")
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ")
    } else {
        console.log(i)
    }
    i++
}

console.log("==========================================================")
console.log("==========================================================")

// Part2 : Prime Time

let n = 25;
let nextPrime = n + 1;
let notPrime = true;

while(notPrime) {
    let prime = nextPrime;
    for (let j = 2 ; j < nextPrime; j++ ) {
        if (nextPrime % j === 0) {
            nextPrime++;
           break;
        }
    }
    if (prime === nextPrime) {
        notPrime = false;
        console.log(`The next prime after ${n} is ${nextPrime}`)
    }
}

// Part 3: Feeling Loopy

let characters = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let arrayCharactes = [];
let str = characters.charAt(0);
let row = [];
for (let k = 1; k < characters.length; k++) { // staring with index one because we need to check two characters at the same time.
   if (characters.substring(k - 1, k) === "\n") { // checking if it is a new row
        if(str.endsWith("\n")) {      //Removing the \n at the end of a string.
            let strCopy = str;
            str = "";
            for(let l = 0; l < strCopy.length - 1; l++) {
                str += strCopy.charAt(l);
            } 
        }
        row.push(str);
        arrayCharactes.push(row);
        row = [];
        str = characters.charAt(k);
    } else if (characters.charAt(k) === ",") { //Adding a new column when with reach the comma.
        row.push(str);
        str = "";
    } else {
        str += characters.charAt(k);
    }
}
// Adding the last row to the main array.
row.push(str);
arrayCharactes.push(row);

console.log(arrayCharactes);





