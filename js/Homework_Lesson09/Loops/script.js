//Task 1
let i = 33;
let result = '';
while (i >= 23) {
    if (i % 3 === 0) {
        result += i + " ";
    }

    i -= 3;
}

console.log(result);

//Task 2
let randomNumber = 0;
let counter = 0;
do {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    counter++;
}
while (randomNumber !== 8);
console.log(`Task 2 Counter: ${counter}`);

//Task 3
for (let i = 2; i <= 10; i++) {
    console.log(`2 в степені ${i} дорівнює ${Math.pow(2, i)}`);
}