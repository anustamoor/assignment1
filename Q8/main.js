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

//Q8 code here Roman numbers of decimal numbers

switch(q8num){
    case '1':
      console.log(`I`);
      document.getElementById("q8").innerHTML = `I`;
      break;
    case '2':
      console.log(`II`);
      document.getElementById("q8").innerHTML = `II`;
      break;
    case '3':
      console.log(`III`);
      document.getElementById("q8").innerHTML = `III`;
      break;
    case '4':
      console.log(`IV`);
      document.getElementById("q8").innerHTML = `IV`;
      break;
    case '5':
      console.log(`V`);
      document.getElementById("q8").innerHTML = `V`;
      break;
    case '6':
      console.log(`VI`);
      document.getElementById("q8").innerHTML = `VI`;
      break;
    case '7':
      console.log(`VII`);
      document.getElementById("q8").innerHTML = `VII`;
      break;
    case '8':
      console.log(`VIII`);
      document.getElementById("q8").innerHTML = `VIII`;
      break;
    case '9':
      console.log(`IX`);
      document.getElementById("q8").innerHTML = `IX`;
      break;
    case '10':
      console.log(`X`);
      document.getElementById("q8").innerHTML = `X`;
      break;
    default:
      console.log(`Please enter numbers from 1 to 10`);
      document.getElementById("q8").innerHTML = `Please enter numbers from 1 to 10`;
  }
}