const path=require("path")
console.log(__dirname)
console.log(__filename)
const path1=path.resolve(__dirname,"osmodule.js")
console.log(path1)
const path2=path.join(__dirname,"/data","sample.json")
console.log(path2)