
//First way
//let array=new Array();
//console.log(array)
//second way

const { object } = require("webidl-conversions");

//let array1=[]
//{

   // console.log(array1);
//}

///// To push the value in array-----push method
// let array2=[8,4]


//    array2.push(2);
//    console.log(array2);

///// To delete the last value-----pop method

//  let array3=[8,4,8,5,3]


//   array3.push(2);
//    console.log(array3);
//     array3.pop();
//    console.log(array3);
//    //val=array3.indexOf(1);
  // console.log(val);


/////To delete the first value----shift method

// let array4=[8,4,8,5,3]


//    array4.push(2);
//    console.log(array4);
//    array4.pop();
//    console.log(array4);
//    array4.shift();
//    console.log(array4);

/////To add the value to the front----unshift method
// let array5=[8,4,8,5,3]


//    array5.push(2);
//    console.log(array5);
//    array5.pop();
//    console.log(array5);
//    array5.shift();
//    console.log(array5);
//    array5.unshift(6)
//    console.log(array5);

/////To delete the value by using index----slice method
//  let array6=[8,4,8,5,3]

//     array6.splice(2,1,3)
//     console.log(array6);

/////To delete the value by using index----slice method
// let array7=[8,4,8,5,3]

// array7.splice(2,1,3)

// console.log(array7);

///// Tostring method--------Get value in string type

 //let array77=["Pink","Blue","Red","Yellow"]


   //Color=array77.toString()
  

 //console.log(Color);

// To join the string ---------- join method with any special symbols 

//  let array7=["Pink","Blue","Red","Yellow"]

//    Color=array7.join(" * ")
//   console.log(Color);

//To get (undefined or empty item) while deleting value in array ---------- use delete method

// let array7=["Pink","Blue","Red","Yellow"]

//   delete array7[3]

//  console.log(array7);

// to Merging array in use ------concat method

 //const array7=["Pink","Blue","Red","Yellow"]
//  const array8=["orange","White","silver"]
//  const array10=["Black","Purple"]

//    const array9=array7.concat(array8); /// for two array
//    const array11=array7.concat(array8,array10); ///for three array

// console.log(array9);
// console.log(array11);

//  let child=array10.concat("green");// adding string in to the array

//  console.log(child);


 // to cut the array from where we want using-----slice method

//   const array7=["Pink","Blue","Red","Yellow","orange"]

//   let arr=array7.slice(2)

//   console.log(arr);

//   let arr1=array7.slice(1,3)
//   console.log(arr1);

 //The slice() method can take two arguments like slice(1, 3).

//The method then selects elements from the start argument, and up to (but not including) the end argument

/////The sort() method sorts an array alphabetically:

//  let srt=["Pink","Blue","Red","Yellow","orange"]

//  alpha=srt.sort();
//  console.log(alpha);

//  alpha.reverse();
//  console.log(alpha);

//////sort methods for numeric

// let num=[]
// num[0]=1
// num[9]=10

// console.log(num.length);

// for(let n in num){
//     console.log(n,num[n]);
//}
// To change from string to array-----split method
//  let word="My name is gowri Elumalai selvi".split(' ')
//  console.log(word);
//  let [a,b,c,...d]=word;
//  console.log(d);

//  let num=[7,5,10,11,12]
//  num.push(3);
//  let[a,b,c,d,e]=num;
//  console.log(c)

//To fetch the single value using index

let num=[7,5,10,11,12]
num.push(3);
console.log(num);
console.log(num[2]);

 

///// Swapping the values use destructuring method
// let a=4;
// let b=12;
// [a,b]=[b,a]
// console.log(a,b);

////For each method we can do any functions:

// let num1=[7,4,8,16,12];

// num.forEach((n1,Z,num) =>{
//     console.log(n1,Z,num);
//     console.log(n1-2);


// })
    
















