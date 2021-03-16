const fs = require('fs');
const yargs= require('yargs')

const arg1 = yargs.argv._[0];

fs.open('filesList.txt', 'a+', function (err, f) { 
    if (err) { 
       return console.error(err); 
    } 
    var files = fs.readFileSync(f,'utf-8').toString().split('\n');
    console.log("Files: ", files);
    if(yargs.argv._.length==0){
        console.log("No file name arguments passed.")
    }
    else {
        if (files.includes(arg1)){
            console.log('File already exists.')
        }
        else {
            fs.writeFile(arg1, 'You are awesome', function (err) {
                if (err)  {
                return console.log('Error creating file, bad format.');
                }
                
                fs.appendFileSync(f,arg1+"\n");
                console.log("File created: ", arg1)
              });
        }
    }

 }); 

