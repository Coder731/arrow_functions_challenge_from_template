// Question:

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



// ## New approach: simple, non general, specific:
// ### Step 1:
// take user input, using previously done code:

    // take input from user using prompt 2.0 :

        const readline = require('readline');

        const rl = createInterface({
        input: process.stdin,
        output: process.stdout
        });

        rl.question('What subject ? ', function (name) {
        rl.question('grade here not from user ? ', function (country) {
            console.log(`${name}, grade was ${country}`);
            rl.close();
        });
        });

        rl.on('close', function () {
        console.log('\nBYE BYE !!!');
        process.exit(0);
        });


// ->  tidy it up
//     so it takes
//     english
// ->  and passes stuff along
// ->  and outputs 77.5

// ### Step 2:
// manual way to do just
// the addition, not the average yet.... is:

// ### Step 3: as an interim / prelude stepL: (declare variables) :
// a = students.key  -> value[0]
// b = students.key  -> value[1]
// c = students.key  -> value[2]

// ### Step 4: 
// take sum
// divide by 3
// = average (avg)
