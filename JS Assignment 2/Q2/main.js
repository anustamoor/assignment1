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

// Q2 code here

arrnum = number.split("");
arrlen = arrnum.length/2

if (arrlen%1!==0) {
    arrlen = Math.floor(arrlen);
    console.log("Central element is " + arrnum[arrlen]);
    if((arrnum[arrlen]%2) == 0){
        console.log(`${arrnum[arrlen]} is an even number`);
    }
    else{
        console.log(`${arrnum[arrlen]} is an odd number`);
    }
}
else{
    const central = parseFloat(arrnum[arrlen]) + parseFloat(arrnum[arrlen-1]);
    console.log("Central element is " + central);

    if((central%2) == 0){
        console.log(`The sum of both central numbers ${central} is an even number`);
    }
    else{
        console.log(`The sum of both central numbers ${central} is an odd number`);
    }
}



}