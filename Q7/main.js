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

// Q7 code here Greater then or less then

if (q7num1 > q7num2) {
    console.log(`${q7num1} is greater then ${q7num2}`);
    document.getElementById("q7").innerHTML = `${q7num1} is greater then ${q7num2}`;
  }
  else{
    console.log(`${q7num2} is less then ${q7num1}`);
    document.getElementById("q7").innerHTML = `${q7num1} is less then ${q7num2}`;
  }
}