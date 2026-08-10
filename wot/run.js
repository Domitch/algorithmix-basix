//Do not change, helper to read arguments:
const args = process.argv.slice(2);

//Implement below:

const inputMinut = parseInt(args[0]);
const inputWeeks = parseInt(args[1]);
const unit = args[2];
let calcul = inputMinut * inputWeeks * 5;
let output = "";

if(unit === "M" || !unit){
    output = "Waste of time: " + calcul + " M";
}else if (unit === "H"){
    calcul = calcul / 60;
    output = "Waste of time: " + calcul + " " + unit; 
}else if (unit === "D"){
    calcul = (calcul / 60) / 7;
    output = "Waste of time: " + calcul + " " + unit;
}
// Do not change:
console.log(output);
