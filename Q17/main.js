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


// Q17 Code here no of checks

    const calories = q17num1;
    const fats = q17num2;

    const calories_from_fats = fats * 9;
    const Percentage = (calories_from_fats / calories) * 100;

    // console.log(`total calories are ${calories}` );
    // console.log(`total fats are ${fats}`);
    // console.log(`total calories from fats are ${calories_from_fats}`);
    // console.log(Percentage);
    // console.log((30 * calories)/100);
    if (calories_from_fats < (30 * calories)/100) {
        console.log(`pecentage of calories that comes form fats are ${calories_from_fats} of total calories ${calories} and percentage is ${Percentage}`);
        console.log(`The food is low in fat`);
    } else{
        console.log(`The food is high in fat`);
    }
}