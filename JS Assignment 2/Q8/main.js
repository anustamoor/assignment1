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

// Q7 code here

arrnum = number.split("");

console.log(`Entered Array ${arrnum}`);
console.log(`Reversed Array ${arrnum.reverse()}`);


if (parseFloat(arrnum) == parseFloat(arrnum.reverse())) {
    console.log(`The array is a Palindrome`);
}
else{
    console.log(`The array is not a Palindrome`);
}

}