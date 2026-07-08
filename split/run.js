
// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
let name = args [0];
const separateur = args[1];
const list = [];
let currentString = "";

for(let i=0; i< name.length; i++){
	

	let activeLetter = name[i];
        if(activeLetter !== separateur){

	    currentString += activeLetter;
	
        }else{
		list[list.length] = currentString;
		currentString = "";
  }
}

list[list.length] = currentString;

const output = list;

// Do not change:
console.log(output);
