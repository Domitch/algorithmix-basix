// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let name = args[0];
let letter = args[1];
let count = 0;

for( let i=0; i<name.length; i++){
  let a = name[i];
	if(a === letter){
	count +=1;
   }

}
let output = count;

// Do not change:
console.log(output);
