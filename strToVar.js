let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    }
]


let b;

// convert string to variable name
                        // https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
                        function SetToString(varString) {
                            var newValue = "string";
                            b = eval(varString + " = " + "'" + newValue + "'");
                            console.log(b)
                          }                          
                        // end converter
                        // console.log(b)

                        SetToString(students);