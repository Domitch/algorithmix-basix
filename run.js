// Do not change, helper to read arguments:
const args = process.argv.slice(2);

// Implement below:
const str = args[0];
let i = 0;
let j = 1;
let output = true;

while(i < str.length ){
        while(j < str.length){
                if(str[i] === str[j]){
                        output = false;
                        break;
                }
                j++;

        }
        i++;
        j = i + 1;
}


// Do not change:
console.log(output);
