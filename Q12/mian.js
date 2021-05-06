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

let randomsum;

function randomnumbers(){

  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  
  randomsum = num1 + num2;
  
  console.log(num1);
  document.getElementById("q12num1").innerHTML = num1;
  console.log(num2);
  document.getElementById("q12num2").innerHTML = num2;

  return randomsum;
} 

function main() {

// Q12 code here random numbers

if (q12num3 == randomsum) {
    console.log(randomsum);
    document.getElementById("q12").innerHTML = `${randomsum} is the correct answer` ;
  }
  else{
    document.getElementById("q12").innerHTML = "Incorrect Answer" ;
  }

}