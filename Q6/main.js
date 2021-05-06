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

// Q6 code here Grades

if (q6num > 90) {
    console.log('A');
    document.getElementById("q6").innerHTML = 'A';
  }
  else if(q6num > 70){
    console.log('B');
    document.getElementById("q6").innerHTML = 'B';
  }
  else if(q6num > 50){
    console.log('C');
    document.getElementById("q6").innerHTML = 'C';
  }
  else{
    console.log('FAIL');
    document.getElementById("q6").innerHTML = 'FAIL';
  }

}