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

// average
// averageMarks = sum / numParticipants
// const avgMrks = 
const averagePoints = (arr, subject) => {
    return 
};
// Array.prototype.students = function() {
//   var sum = 0;
//   var count = this.length;
//   for (i=0; i<count; i++) {
//     sum += this[i];
//   }
//   return sum/count;
// }
// https://stackoverflow.com/questions/20905354/javascript-calculating-the-average-of-an-array-using-for-loop


let result =  averagePoints (students,'english');
console.log(result)
console.log(students.subjects)