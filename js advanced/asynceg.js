function findUser(){
    return new Promise((resolve,reject)=>{
        let user;
        user?resolve(user):reject(new Error("user not defined"))
    })
}
/*findUser().then((res)=>console.log(res)).catch((err)=>console.log(err))*/
async function caller(){
    try{
    const res=await findUser()
    console.log(res)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("fetch done")
    }
}
caller()


/*

 useEffect(()=>{
  callAPI()
})

async function callAPI(){

    await axios.get()
}
const handleSubmit=async (e)=>{
    const res=await axios.get()
    setResult(res.data.result)
}
*/

