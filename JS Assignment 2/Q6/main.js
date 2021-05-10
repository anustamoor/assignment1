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

// Q6 code here

arrnum = number.split(" ");

let output = 1;

for (let index = 0; index < arrnum.length; index++) {
    output = output * parseFloat(arrnum[index]);
}

console.log(output);
    
}