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

array = []

for(var arrayStudentCount in students) { // counts in students array : 0-2 
    for(var jthPropertyInStudentsI in students[arrayStudentCount]) {  // counts properties 0-3
        for(var studentObjPropValIsKeyValPair in students[arrayStudentCount][jthPropertyInStudentsI]) { /* counts inside properties, gives first high level value currently on */
            var sub_key2 = studentObjPropValIsKeyValPair; // counts the number the letter on the next line is in a sequence
            var sub_val2 = students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]; // this is actually counting through the letters in the name 'John' with each letter at a different count 
            if (jthPropertyInStudentsI == "results") { // gives name of subject
                if (studentObjPropValIsKeyValPair == "english") {
                    // convert string to variable name
                    let b;
                    function SetToString(varString) {
                        var newValue = studentObjPropValIsKeyValPair;
                        b = eval(varString + " = " + "'" + newValue + "'");
                        }                        
                        SetToString();  
                    for (var count in Object.keys(students[arrayStudentCount].results)) {
                        if (Object.keys(students[arrayStudentCount].results)[count] == "english") {
                            array.push(students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]);

                        }
                    }
                }
            }
        }
    }
}

// get average
const sum2 = array.reduce((partialSum, a) => partialSum + a, 0);
let number = array.length;
let average = sum2 / number;
console.log(`average result for english is : ${average}`);

//////////////////////////////////////////////////////////////////////

// for REFERENCES etc :

// please SEE REPOSITORY :

// https://github.com/Coder731/arrow_functions_challenge_from_template

//////////////////////////////////////////////////////////////////////
