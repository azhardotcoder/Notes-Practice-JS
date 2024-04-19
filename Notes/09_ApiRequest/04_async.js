// todo ---------------- async await ----------------
// async await is used to handle promises
// async is used to write the asynchronous code
// await is used to wait for the promise to resolve

// todo ---------------- syntax ----------------
// async (respone)=>{
//     await //write that code which you wanted to wait
// }


// todo ---------------- example ----------------
async function GettingData(respone){
 const data = await fetch("https://randomuser.me/api/")
 const jsonData = await data.json()
 console.log(jsonData);
 
}
GettingData()