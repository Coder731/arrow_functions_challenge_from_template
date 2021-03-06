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

// mixed in push to array from: 
// https://www.codegrepper.com/code-examples/javascript/how+to+store+array.push+in+a+variable+javascript

array = []

// get english results
for(var arrayStudentCount in students){
    for(var jthPropertyInStudentsI in students[arrayStudentCount]){
        for(var studentObjPropValIsKeyValPair in students[arrayStudentCount][jthPropertyInStudentsI]){
            var sub_key2 = studentObjPropValIsKeyValPair;
            var sub_val2 = students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]; // this is actually counting through the letters in the name 'John' with each letter at a different count 
            if (jthPropertyInStudentsI == "results") {
                // console.log(studentObjPropValIsKeyValPair); // logs subjects
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
                            console.log(`students arrayCount jthProperty... valIsKeyValPair is: ${students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]}`);
                            array.push(students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]);

                        }
                    }
                }
            }
        }
    }
}

console.log(array);

// get average

for (x in array) {
    console.log(array[x]);    
}

// let s=array.sum();
// console.log(s);


// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
console.log(sum); // 6

const sum2 = array.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum2);
let number = array.length;
console.log(`number is : ${number}`);
let average = sum2 / number;
console.log(`average result for english is : ${average}`);