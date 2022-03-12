// https://www.youtube.com/watch?v=RxjQgIhEPWE&ab_channel=CodifyAcademy

// creating an array of objects
var cars = [
    {
        make: "honda",
        model: "civic",
        year: 2014,
        color: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: 2000,
        color: "red"
    },
    {
        make: "ford",
        model: "mustang",
        year: 2005,
        color: "black"
    }
]

// loop 1 variable
for(i = 0; i < cars.length; i++) {
    if(cars[i].year < 2010) {
        console.log(cars[i].make + ", " + cars[i].model)
    }
}

// loop 2 variables
for (const [key, value] of Object.entries(students)) {
    console.log(`${key}: ${value}`);
  }
