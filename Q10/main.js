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

// Q10 code here Special Date

const month = parseFloat(q10num1); 
const date = parseFloat(q10num2); 
const year = parseFloat(q10num3); 

if (date*month == year) {
  console.log(`The date ${month}/${date}/${year} is magical`);
  document.getElementById("q10").innerHTML = `The date ${month}/${date}/${year} is magical`;
}
else {
  console.log(`The date ${month}/${date}/${year} is not magical`);
  document.getElementById("q10").innerHTML = `The date ${month}/${date}/${year} is not magical`;
}
}