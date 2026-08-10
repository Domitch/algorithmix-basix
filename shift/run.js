// Do  not  change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const str = args[0];
let number = parseInt(args[1]);
let i = 0;
let j =0;
let output = [];
if (number > str.length){
    number = number % str.length;
}
number = str.length - number;

let array1 = [];
let array2 = [];

while(i < number){
    array1[i] = str[i];
    i++; 
}
while( i< str.length){
    array2[j] = str[i];
    i++;
    j++;
}
i = 0;
j = 0;
while(j < array2.length){
    output[j] = array2[j];
    j++;
}

while(i < array1.length){
    output[j] = array1[i];
    i++;
    j++;
}
// Do not change:
console.log(output);
