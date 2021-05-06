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


// Q14 code here Discount rates

const price = 99;
const product = q14num;
const totalprice = q14num*price;

if (product >= 10 && product < 20) {
  discount = (20 * price)/100;
  total = product * discount; 
  console.log(total);
  console.log(totalprice);
  document.getElementById("q14").innerHTML = `The total price according to the discounts are ${total} of total price ${totalprice}` ;
}

else if (product >= 20 && product < 50) {
  discount = (30 * price)/100;
  total = product * discount; 
  console.log(total);
  console.log(totalprice);
  document.getElementById("q14").innerHTML = `The total price according to the discounts are ${total} of total price ${totalprice}` ;
}

else if (product >= 50 && product < 100) {
  discount = (40 * price)/100;
  total = product * discount; 
  console.log(total);
  console.log(totalprice);
  document.getElementById("q14").innerHTML = `The total price according to the discounts are ${total} of total price ${totalprice}` ;
}

else if (product >= 100) {
  discount = (50 * price)/100;
  total = product * discount; 
  console.log(total);
  console.log(totalprice);
  document.getElementById("q14").innerHTML = `The total price according to the discounts are ${total} of total price ${totalprice}` ;
}

}