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

// Q11 code here heavy or light object

const newton = parseFloat(q11num) * 9.8;

console.log( Math.round(newton * 10) / 10);

if (newton >= 1000) {
  console.log(`${q11num} the object is too heavy`);
  document.getElementById("q11").innerHTML = ` the object is too heavy`;
} 
else if( newton <= 10){
  console.log(`${q11num} the object is too light.`);
  document.getElementById("q11").innerHTML = ` the object is too light.`;
}
else{
  console.log(`${q11num} the object is of normal weight.`);
  document.getElementById("q11").innerHTML = ` the object is of normal weight.`;
}

}