
let bio=new Set("gowri elumalai")

console.log(bio);

 bio.add("Name")
 bio.add("Age")
 bio.add("Dateofbirth")
 bio.add("Qualification")
 bio.add("Name")

 //console.log(map);
 console.log ("****Bio-information****")
 
  bio.forEach((value)=>{
   console.log(value);

 })



 console.log(bio.keys("Name"));
 console.log(bio.values("Age"));
 console.log(bio.has("Age"));