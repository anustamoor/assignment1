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

    // Q3 code here Celcius to Feranheit

  const F = (q3num * 9/5) + 32;

  console.log(`${q3num} degree celcius is equal to ${F} degree farenheit `);
  document.getElementById("q3").innerHTML = `${q3num} degree celcius is equal to ${F} degree farenheit `;  

}