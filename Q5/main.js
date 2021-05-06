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

// Q5 code here Test Score

const sum = parseFloat(q5num1) + parseFloat(q5num2) + parseFloat(q5num3);
const average = sum/3

if (average > 100.0) {
console.log('Congratualtions! thats a perfect score');
document.getElementById("q5").innerHTML = `Congratualtions! thats a perfect score`
}
else{
console.log('Better luck next time');
document.getElementById("q5").innerHTML = `Better luck next time`;
}

}