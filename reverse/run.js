// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let name = args[0];
let output = "";

for(let i= name.length -1; i >= 0; i--){
 output = output + name[i];
}
// Do not change:
console.log(output);
