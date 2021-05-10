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

// Q3 code here

    arrnum = number.split("");
    firstnum = arrnum[0];
    lastnum = arrnum[arrnum.length-1];

    if(number.length > 2){
        console.log(`First digit is : ${firstnum}`);
        console.log(`Last digit is : ${lastnum}`);
        if(firstnum == lastnum){
            console.log("The First and Last digit of number are same");
        }
        else{
            console.log("The First and Last digit of number are NOT same");
        }
    }
    else{
        console.log("ERROR!!! Try Again");
    }
  
    
  }
  
  
  
  