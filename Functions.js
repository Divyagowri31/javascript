 //FUNCTION EXPRESSION
//***Named function expression */
//   let hello=function hello(one,two){
//      return one+two
//   }
//  let sum=hello(1,2)
//   console.log(sum);

// //***Anonymous function exepression
// let hell=function(one,two){
//   return one+two
// }
// let sum1=hello(1,2)
// console.log(sum);


 //Arrow functions

//  let funexp=(one,two) =>one+two
//     //     return one+two
//     //  }
//      let sum=funexp(1,2)
//       console.log(sum);

      //Constructor function

     function Data(name) {

   this.Name=name;
      this.greeting=()=>{

    console.log(`Hi ${name} 
    Welcome to the company`);
}
        
      }
      let call = new Data("Gowri");
      let call1 = new Data("Divya");
      call.greeting()
      console.log(call1);
      
//Normal function
 //why we need function?


// function house(Bedroom,hall,kitchen){
//   console.log("Hi Sabu");
//    let home={}
  
//    home.Bed=Bedroom
//    home.hall=hall
//    home.kitchen=kitchen
//    //console.log("Hi Sabu");
//    return home;
   
   
   //-----------------------------> doubt
// }

//  let house1= new house(3,1,1)
//  console.log(house1);
      