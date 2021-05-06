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


// Q15 Code here no of checks

const checks = q15num;

if (checks < 20 && checks > 0) {
  charge = (0.10 * checks) + 10;
  console.log(charge);
  document.getElementById("q15").innerHTML = `The total fees for the bank is ${charge} Dollars`
}
else if (checks > 20) {
  charge = (0.8 * checks) + 10;
  console.log(charge);
  document.getElementById("q15").innerHTML = `The total fees for the bank is ${charge} Dollars`
}
else if (checks > 40) {
  charge = (0.6 * checks) + 10;
  console.log(charge);
  document.getElementById("q15").innerHTML = `The total fees for the bank is ${charge} Dollars`
}
else if (checks > 60) {
  charge = (0.4 * checks) + 10;
  console.log(charge);
  document.getElementById("q15").innerHTML = `The total fees for the bank is ${charge} Dollars`
}

}