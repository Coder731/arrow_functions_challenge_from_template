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

for(i = 0; i < cars.length; i++) {
    if(cars[i].year < 2010) {
        console.log(cars[i].make + ", " + cars[i].model)
    }
}