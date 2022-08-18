 let map = new Map();
  
 map.set("Name","Divya")
 map.set("Age","24")
 map.set("Dateofbirth","31-10-97")
 map.set("Qualification","BCA")
 map.set("Name","Gowri")

 //console.log(map);
 console.log ("****Bio-information****")
 
  map.forEach((Title,info)=>{
   console.log(info, ":",Title);

 })

 console.log(map.get("Name"));
 console.log(map.has("Age"));