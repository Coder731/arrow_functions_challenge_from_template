// json_object = json.loads('{"first_key":"first_value", "second_key":"second_value"}')
// pairs = json_object.items()

// for key, value in pairs:
//     print(value)

//  Question:
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

// Answer:


// https://stackoverflow.com/questions/7241878/for-in-loops-in-javascript-key-value-pairs
//  https://attacomsian.com/blog/javascript-iterate-objects#:~:text=keys()%20Method-,The%20Object.,the%20value%20of%20each%20property.
for (var k in students){
    if (typeof students[k] !== 'function') {
            alert("Key is " + k + ", value is" + students[k]);
    }
}
