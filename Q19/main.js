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

// Q19 Code here no of checks

const minutes = q20num2;
const time = q20num1.split(".");

if (time[0] >= 0 && time[0] <= 23 && time[1] >= 0 && time[1] <= 59) {
    if (time[0] <= 6 && time[1] <= 59) {
        charges = minutes*0.12;
        console.log(`Charges per minutes are ${Math.round(charges * 10) / 10}$`);
    }
    else if(time[0] >= 7 && time[0] <= 19 && time[1] >= 0 && time[1] <= 59){
        charges = minutes*0.55;
        console.log(`Charges per minutes are ${Math.round(charges * 10) / 10}$`);
    }
    else if(time[0] >= 19 && time[0] <= 23 && time[1] > 0 && time[1] <= 59){
        charges = minutes*0.35;
        console.log(`Charges per minutes are ${Math.round(charges * 10) / 10}$`);
    }
}
else{
    console.log(`Enter Valid time`);
}


}