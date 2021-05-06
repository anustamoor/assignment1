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

    // Q1 code here Even or Odd
    
    if((q1num%2) == 0){
        console.log(`${q1num} is an even number`);
        document.getElementById("q1").innerHTML = `${q1num} is an even number`;
    }
    else{
        console.log(`${q1num} is not an even number`);
        document.getElementById("q1").innerHTML = `${q1num} is not an even number`;
    }
}