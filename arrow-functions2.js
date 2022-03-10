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

// Part 3 / Attempt 2:


//define input function:
// Reference:
// https://www.mikedane.com/web-development/javascript/getting-user-input/#:~:text=In%20JavaScript%2C%20we%20can%20get%20user%20input%20like%20this%3A&text=var%20name%20%3D%20window.,out%20what%20they%20entered%20in.

var name = window.prompt("Enter your name: ");
alert("Your name is " + name);


// So it takes input from user
let input = input();
// passes it into program

// uses the key

// to get the value

// and console.log(value)

// if (without if) 
// if user gives english
// gets 78.5

// as this is average english score for all students

// 3 students