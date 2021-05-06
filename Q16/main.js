// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input:not(input[type=submit])");
    const refresh_values = () => {
        for (const input of inputs) {
        window[input.name] = input.value;
        }
    };
    
    document.getElementById("submit").onclick = () => {
        refresh_values();
        main();
    };
});

function main() {


// Q16 code here 

    

    //Area of circle

    const pi = 3.141;
    circlearea = pi * (radius * radius)

    console.log(`the area of circle is ${circlearea} \n`);


     //Area of rectangle

     rectarea = length * width;

    console.log(`the area of rectangle is ${rectarea} \n`);

    //Area of tirangle

    triarea = (trianlelen*height) / 2;
    console.log(`the area of triangle is ${triarea} \n`);

}