//Task 1
const number = Number.parseFloat(prompt('Write a number to check'));
if (number % 2 === 0) {
    console.log('Число парне');
}
else {
    console.log('Число непарне');
}

//Task 2
const dayOfWeek = Number.parseInt(prompt('Write a day of week'));
switch (dayOfWeek) {
    case 0: {
        console.log('Понеділок');
        break;
    }
    case 1: {
        console.log('Вівторок');
        break;
    }
    case 2: {
        console.log('Середа');
        break;
    }
    case 3: {
        console.log('Четвер');
        break;
    }
    case 4: {
        console.log("П'ятниця");
        break;
    }
    case 5: {
        console.log('Субота');
        break;
    }
    case 6: {
        console.log('Неділя');
        break;
    }
    default: {
        console.log('Неправильне число');
        break;
    }
}

//Task 3
let a = Math.random() * 10;
let b = Math.random() * 10;

console.log(a);
console.log(b);

a > b ? console.log('Перше число більше') : a < b ? console.log('Друге число більше') : console.log('Числа рівні');