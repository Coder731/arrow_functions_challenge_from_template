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

// Isolated for loop of interest at 12Mar2022 1938h
// if ${students[0].results.value}
    console.log(`${students[0].results.english}`);


    // https://stackoverflow.com/questions/8430336/get-keys-of-json-object-in-javascript
    var jsonData = [{"person":"me","age":"30"},{"person":"you","age":"25"}];

    for(var i in jsonData){
        var key = i;
        var val = jsonData[i];
        for(var j in val){
            var sub_key = j;
            var sub_val = val[j];
            console.log(sub_key);
        }
    }

    
    for(var i in students){
        var key = i;
        var val = students[i];
        for(var j in val){
            var sub_key = j;
            var sub_val = val[j];
            console.log(sub_key);
        }
    }
