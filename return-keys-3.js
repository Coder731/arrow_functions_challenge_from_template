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

// let subject;
// take user input :
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs

    // avoid taking input due to need for callback(s) 
    // const readline = require('readline').createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   })
    
    //   readline.question(`What subject are you interested in?`, subject => {
    //     console.log(`The subject you have selected is: ${subject}!`)
    //     readline.close()
    //   })

// Next line causes subject variable scope bug:
//   console.log(`subject outside block scope: ${subject}`)

let input = 'english'
// pseudocode:
    // if (input == 'english') {
    //     // set selector to english
    // }


    console.log(`${students[0].results.english}`);
    
    for(var i in students){
        var key = i;
        var val = students[i];
        for(var j in val){
            var sub_key = j;
            var sub_val = val[j];
            // console.log(sub_key);
            for(var k in sub_val){
                var sub_key2 = k;
                var sub_val2 = sub_val[k];
                console.log(sub_key2);
                // if (sub_val2 == ) {
                    
                // }
            }
        }
    }
    console.log(`students i j k is: ${students[i][j][k]}`);
