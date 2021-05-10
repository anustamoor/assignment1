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

// Q5 code here

arrnum = number.split(" ");
arrlen = arrnum.length/2;
arrlen = Math.floor(arrlen);
let output = 0;

for (let index = 0; index < arrlen; index++) {
    output = output + parseFloat(arrnum[index]);
}

console.log(output);
    
}