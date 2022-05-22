/*const fetchuser=new Promise((resolve,reject)=>{
    let user={
        fname:"john"
    };
    user?resolve(user):reject(new Error("user not defined"))
})
fetchuser.then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("completed fetch"))
const fetchuser=new Promise((resolve,reject)=>{
    let user={
        fname:"john",
        role:"admin"
    };
    user?resolve(user):reject(new Error("user not defined"))
})
fetchuser.then((res)=>{
    if(res.role==="admin"){
        console.log(res)
        return res
    }
    else{
        return new Error("you are not allowed")
    }
}).then((res2)=>{
    console.log(res2) 
}).
catch((err)=>console.log(err)).finally(()=>console.log("completed fetch"))
*/

