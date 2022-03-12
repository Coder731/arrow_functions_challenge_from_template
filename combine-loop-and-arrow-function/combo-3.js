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
// for(i = 0; i < students.length; i++) { // loops through students outer array with i
//     for(j=0; j < students[i].length; j++) // loops through results
//     if(students[i].results == 'english') {
//         console.log(students[i].results + ", " + students[i].results)
//     }
// }

// simpler

let a = students;

// for(i = 0; i < a.length; i++) { // loops through students outer array with i
//     // for(j=0; j < a[i].length; j++) // loops through results
//     for(j=0; j < a[i].length; j++) // loops through results
//     console.log(a[i])
//     if(a[i].results == 'english') {
//         console.log(a[i].results + ", " + a[i].results)
//     }
// }


// medium complexity

for(i = 0; i < students.length; i++) { // loops through students outer array with i
    // for(j=3;) // loops through results // goes to results
    for(j=0; j < a[i].length; j++) {// loops through results // goes to results
        // for(k=/*key*/) {
            for (const [key, value] of Object.entries(students)) {
                console.log(`${key}: ${value}`);
                for (const [key, value] of Object.entries(students.results)) {
                    console.log(`${key}: ${value}`);
                }
            }
            


            // if(students[i].results == 'english') {
            //     console.log(students[i].results + ", " + students[i].results)
            // }
        // }
    }
}


// // more complex

// for(i = 0; i < students.length; i++) { // loops through students outer array with i
//     for(j=0; j < students[i].length; j++) // loops through results
//     if(students[i].results == 'english') {
//         console.log(students[i].results + ", " + students[i].results)
//     }
// }


// loop 2 variables
for (const [key, value] of Object.entries(students)) {
    console.log(`${key}: ${value}`);
  }
