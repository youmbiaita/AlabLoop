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

let characters = "\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let arrayCharacter = [];
let newLine = "\n";
console.log(characters.substring(0, 2));
for (let k = 0; k < characters.length; k++) {
    if (characters.substring(k, k+1) === newLine) {


    }
}





