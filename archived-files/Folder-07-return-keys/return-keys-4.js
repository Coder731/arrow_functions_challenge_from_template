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
