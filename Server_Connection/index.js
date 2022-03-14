const fs=require('fs')
const path=require('path')
const http=require('http')
fs.writeFile('index.html','Hello Word',(err,data)=>{
if(err)console.log(err);
console.log('Success');
})
const PORT=5000;
http.createServer((req,res)=>{
    fs.readFile('index.html','utf8',(err,data)=>{
        res.write(data);
        res.end();    
    })
    
}).listen(5000,()=>{
    console.log(`Running in ${PORT}`);
})    
