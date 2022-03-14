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

// let a = students;


let input = 'english'
// pseudocode:
    // if (input == 'english') {
    //     // set selector to english
    // }


    // console.log(`${students[0].results.english}`);
    
    for(var arrayStudentCount in students){
        for(var jthPropertyInStudentsI in students[arrayStudentCount]){
            for(var studentObjPropValIsKeyValPair in students[arrayStudentCount][jthPropertyInStudentsI]){
                var sub_key2 = studentObjPropValIsKeyValPair;
                var sub_val2 = students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]; // this is actually counting through the letters in the name 'John' with each letter at a different count 
                if (jthPropertyInStudentsI == "results") {
                    console.log(studentObjPropValIsKeyValPair);
                    if (studentObjPropValIsKeyValPair == "english") {
                        // convert string to variable name
                        let b;
                        function SetToString(varString) {
                            var newValue = studentObjPropValIsKeyValPair;
                            b = eval(varString + " = " + "'" + newValue + "'");
                            // console.log(`b is : ${b}`)
                          }                        
                          SetToString();  
                          // console.log(`typeof(b) : ${typeof(b)}`);
                        // end converter
                        // console.log(`studentObjPropValIsKeyValPair is : ${studentObjPropValIsKeyValPair}`);
                        // console.log(`Though this comment is syntactically incorrect: SetToString(studentObjPropValIsKeyValPair) is : ${b}`);
                        console.log(`get score here for student number ${arrayStudentCount}, \n Score is: ${students[arrayStudentCount].results.b}`);
                        // console.log(`students[arrayStudentCount].results is : ${students[arrayStudentCount].results}`);
                        // console.log(`Object.keys(students[arrayStudentCount].results) is : ${Object.keys(students[arrayStudentCount].results)}`);
                        for (var count in Object.keys(students[arrayStudentCount].results)) {
                            if (Object.keys(students[arrayStudentCount].results)[count] == "english") {
                                console.log("english located");
                                console.log(`get score here for student number ${arrayStudentCount}, \n Score is: ${students[arrayStudentCount].results.b}`);
                                console.log(`students arrayCount jthProperty... valIsKeyValPair is: ${students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]}`);
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(`students arrayCount jthProperty... valIsKeyValPair is: ${students[arrayStudentCount][jthPropertyInStudentsI][studentObjPropValIsKeyValPair]}`);
