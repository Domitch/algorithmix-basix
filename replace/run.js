// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let name = args[0];
let add = args[1];
let insert = args[2];
let output = "";

for( let i = 0; i < name.length; i++){
     let count = name[i];

     if(count === add){

     output = output + insert;
 	} else {
    output = output + count;
	}
}

// Do not change:
console.log(output);



