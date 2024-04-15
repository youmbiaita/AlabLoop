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
for (let k = 1; k < characters.length; k++) {
    if (characters.substring(k - 1, k) === "\n") {
        continue;
    } else if (characters.substring(k - 2, k - 1) === "\n") {
        row.push(str);
        arrayCharactes.push(row);
        row = [];
    } else {
        if (characters.charAt(k) === ",") {
            if (characters.substring(k - 1, k) !== "\n") {
                str += characters.charAt(k);
            } else {
                row.push(str);
                str = "";
            }
        }
    }
}
console.log(arrayCharactes);




