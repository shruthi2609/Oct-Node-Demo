const fs=require("fs")
const readerPointer=fs.createReadStream('./data/sample2.txt')
let data=""
//data , end , err
readerPointer.on("data",(chunk)=>{
    console.log("chunk",chunk)
data+=chunk
})
readerPointer.on("end",()=>{
    console.log(data)
    })
readerPointer.on("err",(err)=>{
       console.log(err)
})


const writePointer=fs.createWriteStream("./dat/writefile.txt")
writePointer.write("create data",'utf-8')
writePointer.end()

writePointer.on("finish",()=>{
    console.log("finish")
})
writePointer.on("error",(err)=>{
    console.log(err)
})



