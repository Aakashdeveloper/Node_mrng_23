let fs = require('fs');

// Over write the exisiting text
// fs.writeFile('myText.txt','This is about the Fs',function(){
//     console.log('Task Done')
// })

// Keep adding text in same file
// fs.appendFile('myCode.txt','I m doing nodejs \n',function(){
//     console.log('Task Done')
// })

// ReadFile
fs.readFile('location.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

//Rename File
// fs.rename('myText.txt','mydata.txt',function(err){
//     if(err) throw err;
//     console.log('File Renamed')
// })


// Delete File
// fs.unlink('mydata.txt',function(err){
//     if(err) throw err;
//     console.log('File Deleted')
// })