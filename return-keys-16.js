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

array = [];

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
console.log(average);

// get variable names right

// ENTER SEARCH TERM HERE: change this to change search : 
// let input = "english";

// arrow functions
// https://www.tutorialsteacher.com/typescript/arrow-function
const averagePoints = (arr, subject) => { // step 1. & 2.
    for (i in arr) {
        for (j in arr[i]) {
            for (k in arr[i][j]) {
                console.log(`arr[i][j] is : ${arr[i][j]} ... is it a subject?`)
                if (Array.isArray(arr[i][j])) {
                    console.log(`the key to this object is : ${students.keys(arr[i][j])}`) // the key to this object is : [object Array Iterator]
                    if ("math" == subject) {
                        return arr[i][j]
                    }
                }
            }
        }
    }
    //if (arr[i][j][k] == subject) {
        //return (Object.keys(arr[i][j]))
        console.log(Object.keys(arr[i][j]));
        console.log(Object.values(arr[i][j]));
    //}
    for (counter in Object.keys(arr[i][j])) {


        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const found = students.find(element => element = subject);
        console.log(`found : ${Object.values(found)}`);
        for (counter2 in Object.values(found)) {
            console.log(`Object.values(found)[counter2] : ${Object.values(found)[counter2]}`);
            // if (typeof(Object.values(found)[counter2]) == Object) {
            //     console.log("type is Object");
            // }
        }

        // if (Object.keys(arr[i][j][counter]) == subject) {
        //     return (Object.values(arr[i][j][counter]))
        // }
    }
}



let result = averagePoints(students, 'english')
// console.log(`result is : ${result}`);


//////////////////////////////////////////////////////////////////////

// for REFERENCES etc :

// please SEE REPOSITORY :

// https://github.com/Coder731/arrow_functions_challenge_from_template

//////////////////////////////////////////////////////////////////////
