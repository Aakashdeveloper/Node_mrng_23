let fs = require('fs');

//Over write the exisiting text
// fs.writeFile('myText.txt','This is about the Fs',function(){
//     console.log('Task Done')
// })

// Keep adding text in same file
// fs.appendFile('myCode.txt','I m doing nodejs \n',function(){
//     console.log('Task Done')
// })

fs.readFile('myCode.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})