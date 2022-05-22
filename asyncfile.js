const fs=require("fs")
fs.readFile("./data/demofile.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err.code)
    }
   setTimeout(()=>console.log(data),3000)
})
fs.readFile("./data/demo2.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
   setTimeout(()=>console.log(data),2000)
})
const finaldata="some random data"
fs.writeFile("./data/asyncwrite.txt",finaldata,(err)=>{
    if(err){
        console.log("error in write",err.code)
    }

})
const appenddata="new data"
fs.appendFile("./data/async.txt",appenddata,(err)=>{
    if(err){
        console.log("error")
    }
   
})