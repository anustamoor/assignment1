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

// Q7 code here

arrnum = number.split("");

if (arrnum.length == 3) {
    arrnum[0] = arrnum[0]*arrnum[0]*arrnum[0];
    arrnum[1] = arrnum[1]*arrnum[1]*arrnum[1];
    arrnum[2] = arrnum[2]*arrnum[2]*arrnum[2];
    
    const sum = arrnum[0]+arrnum[1]+arrnum[2]
    
    if (sum == number) {
        console.log(`${sum} is an armstrong number`);
    }
    else{
        console.log(`${sum} is not an armstrong number`)
    }   
}
else{
    console.log(`please enter values upto 3`);
}

}