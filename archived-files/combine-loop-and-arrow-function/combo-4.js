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

let a = students;

// medium complexity

// for(i = 0; i < students.length; i++) { // loops through students outer array with i
//     for(j=0; j < a[i].length; j++) {// loops through results // goes to results
//         for (const [key, value] of Object.entries(students)) {
//             // console.log(`${key}: ${value}`);
//             for (const [key, value] of Object.entries(students.results)) {
//                 console.log(`${key}: ${value}`);
//             }
//         }
//     }
// }


// Isolated for loop of interest at 12Mar2022 1938h
for (const [key, value] of Object.entries(students.results)) {
    console.log(`${key}: ${value}`);
}


