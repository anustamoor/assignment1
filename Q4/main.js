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

// Q4 code here Yen and Dol

const YEN_CALC = q4num* 109.21;
const EUROS_CALC = q4num* 0.83;

console.log(`${q4num} Dollars is equal to ${YEN_CALC} Yen and ${EUROS_CALC} Euros`);
document.getElementById("q4").innerHTML = `${q4num} Dollars is equal to ${YEN_CALC} Yen and ${EUROS_CALC} Euros`; 

}