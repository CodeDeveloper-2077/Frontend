let car = {
    brand: 'BMW',
    model: '3 Series (E46)',
    year: 2004,
    color: 'Silver',
    displayInfo: function () {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Колір: ${this.color}`);
    }
};

let book = {
    name: 'The Lord of the Rings: The Return of the King',
    author: 'J.R.R. Tolkien',
    pageNumber: 416,
    displayBookDescription: function () {
        console.log(`Назва книги: ${this.name}, Автор: ${this.author}, Кількість сторінок: ${this.pageNumber}`);
    }
};

let student = {
    name: 'Oleh',
    surname: 'Shevchenko',
    course: 3,
    greet: function () {
        console.log(`Привіт! Мене звати ${this.name} ${this.surname}, я навчаюся на ${this.course} курсі`);
    }
};

car.displayInfo();
book.displayBookDescription();
student.greet();