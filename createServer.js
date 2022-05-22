/*const http=require("http")
const url=require("url")
const app=http.createServer((req,res)=>{
const parsedURL=url.parse(req.url,true)
//console.log(parsedURL.query.q)
console.log(parsedURL)
if(parsedURL.pathname==="/home"){
    res.write("home page")
    res.end()
}
else if (parsedURL.pathname==="/contact"){
    res.write("contact page")
    res.end()
}

})
app.listen(3001,()=>console.log("server started"))*/
