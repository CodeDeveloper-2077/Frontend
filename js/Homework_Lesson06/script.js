//Task 1
let film = "The Lord of The Rings";
let genre = "Fantasy";
let year = 2001;

const filmDataConcatenation  = film + ', a ' + genre + ' film, was first released in ' + year + '.';
const filmDataPattern = `${film}, a ${genre} film, was first released in ${year}.`;

console.log(filmDataConcatenation);
console.log(filmDataPattern);

//Task 2
let quote = "'Measure' seven \ttimes,\n 'cut' once";
console.log(quote);

//Task 3
let verse = "Світло кінця тунелю, а за спиною лише темрява";
console.log(verse.indexOf('Світло'));
console.log(verse.indexOf('темрява'));
console.log(verse.startsWith('Світло'));
console.log(verse.endsWith('темрява'));

//Task 4
let phrase = "Сонце світить яскраво";
console.log(phrase.toLowerCase().replace('сонце', 'Місяць'));