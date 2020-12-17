
/*
console.log("Hello Promise")

setTimeout( ()=>{

    console.log("After 3seconds I am still confused what promise is ")

},3000)

console.log("I am last but still I got excuted")
*/


//CREATED OUR FIRST PROMISE
let myFirstPromise = new Promise((resolve, reject) =>{

  let name = "Yousuf";

  setTimeout(()=> resolve(name),3000);

})

//console.log(myFirstPromise)

//NEXT STEP

myFirstPromise.then(

    (nam)=>{

        console.log("Promise works")
    }

)
