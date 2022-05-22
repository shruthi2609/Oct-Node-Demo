const fs=require("fs")
const data1=fs.readFileSync("./data/demo.txt",'utf-8')
console.log(data1)
const data2=fs.readFileSync("./data/demo2.txt",'utf-8')
const data=data1+data2
fs.writeFileSync("./data/merge.txt","new data")
fs.appendFileSync("./data/merge.txt","appended data")


