
function mainfun(call){
callback()
    console.log('Main function executed');
}

function callback(){
    console.log('Call back function exectued');
}
mainfun();
//callback();

 const p1=(num,call)=> {
     return call(num+4)
 }

 const call=(num)=>{
     return num + 8
 }
 console.log(p1(4,call));


