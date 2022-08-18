//const { pipeline } = require("stream");


 const p1=new Promise((resolve,reject)=>{
setTimeout(() => {
    reject("Main function executed");
    }, 1000);
 })

const p2 =new Promise((resolve,reject)=>{

    resolve("function executed");

    
})

//p1.then(console.log)
Promise.race([p1,p2]).then(console.log).catch(console.log)


