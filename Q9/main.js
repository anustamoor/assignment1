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

// Q9 code here Area of rectangle

const rect1 = q9num1 * q9num2;
const rect2 = q9num3 * q9num4;

if (rect1 > rect2) {
  console.log(`Rect1 ${rect1} is greater then Rect2 ${rect2}`);
  document.getElementById("q9").innerHTML = `Rect1 is greater then Rect2 `;
}
else if (rect1 < rect2){
  console.log(`Rect1 ${rect1} is less then Rect2 ${rect2}`);
  document.getElementById("q9").innerHTML = `Rect1 is less then Rect2 `;
}
else{
  console.log(`Rect1 ${rect1} and Rect2 ${rect2} have same area`);
  document.getElementById("q9").innerHTML = `Rect1 and Rect2 have same area`;
}
}