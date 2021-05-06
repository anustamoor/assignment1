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

    // Q2 code here +ve , -ve and decimal numbers

  if (q2num>0 && q2num%1==0) {
    console.log(`${q2num} is a positive number`);
    document.getElementById("q2").innerHTML = `${q2num} is a positive number`;
  } 
  else if(q2num<0){
    console.log(`${q2num} is a negative number`);
    document.getElementById("q2").innerHTML = `${q2num} is a negative number`;
  }
  else if(q2num%1!==0){
    console.log(`${q2num} is a decimal number`);
    document.getElementById("q2").innerHTML = `${q2num} is a decimal number`;
  }
}