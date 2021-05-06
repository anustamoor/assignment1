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


//Q13 Code here Hours Minutes Seconds 

const seconds = parseInt(q13num);

if (seconds <= 3600 && seconds >= 60) {
  minutes = seconds /60;
  console.log(minutes);
  document.getElementById("q13").innerHTML = `There are ${minutes} miniutes in ${seconds} seconds` ;
}
if (seconds <= 86400 && seconds >= 3600) {
  hour = seconds /3600;
  console.log(hour);
  document.getElementById("q13").innerHTML = `There are ${hour} hours in ${seconds} seconds` ;
}
if (seconds >= 86400) {
  days = seconds /86400;
  console.log(days);
  document.getElementById("q13").innerHTML = `There is ${hour} day in ${seconds} seconds` ;
}

}