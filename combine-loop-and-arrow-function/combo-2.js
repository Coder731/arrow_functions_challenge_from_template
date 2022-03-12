// from combo-1.js
// creating an array of objects
var cars = [
    {
        make: "honda",
        model: "civic",
        year: 2014,
        color: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: 2000,
        color: "red"
    },
    {
        make: "ford",
        model: "mustang",
        year: 2005,
        color: "black"
    }
]

// loop 1 variable
for(i = 0; i < cars.length; i++) {
    if(cars[i].year < 2010) {
        console.log(cars[i].make + ", " + cars[i].model)
    }
}

// from arrow-function.js
// or question

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// loop 2 variables
for(i = 0; i < students.length; i++) {
    for(j=0; j < students[i].length; j++)
    if(students[i].results == 'english') {
        console.log(students[i].results + ", " + students[i].results)
    }
}

