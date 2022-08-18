////Example-1


let age=[18,22,24,17,12,50,44]

let adult=age.filter(function(value)
{

    return value>=18;
})

console.log("Adult",": ", adult);

////Example-2

let num=[1,2,3,4,5,6,7,8,9,10]

let even =num.filter((value)=>{
return value %2==0;

})

let odd =num.filter((value)=>{

    return value %2!=0;
})

console.log("Odd number", odd);
console.log("Even number", even);

////Example-3

let dress=[{size: 'M', color:"Red",price:1000},
            {size:"s",color:"Blue",price:2000},
            {size:"L",color:"White",price:2500}
        ]

        let amazon=dress.filter((value)=>{

            return value.price<=2000,value.color=="Blue";
        });

        console.log(amazon);

    



