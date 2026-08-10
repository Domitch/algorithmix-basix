//Do not change, helper ton read arguments:
const args = process.argv.slice(2);

// Implement below:
let input = args[0].split(",");
let i = 0;
let j = 1;
let output = "";
let bool = true;
 for( let i = 0; i < input.length; i++){
    if(input[i]>= "0" && input[i] <= "9") 
        input[i] = parseInt(input[i]);
}
i = 0;
while(j < input.length){
    if(input[i] > input[j]){
        let x = input[i];
        input[i] = input[j];
        input[j] = x;
        bool = false;
    }
    if(j === input.length - 1 && bool === false){
        i = 0;
        j = i +1;
        bool = true;
        continue;
    }
    i++;
    j++;
}
output = input;

// Do not change:
console.log(output);
