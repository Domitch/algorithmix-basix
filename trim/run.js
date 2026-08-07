// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const str = args[0];
let output = "";
let i = 0;
let j = str.length -1;

while(str[i] === " ")
        i++;

while(str[j] === " ")
        j--;

while(i <= j) {
        output += str[i];
        i++;
}

// Do not change:
console.log(output);
