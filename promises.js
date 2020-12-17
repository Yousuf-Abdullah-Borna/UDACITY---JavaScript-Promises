
/*
console.log("Hello Promise")

setTimeout( ()=>{

    console.log("After 3seconds I am still confused what promise is ")

},3000)

console.log("I am last but still I got excuted")
*/

let myFirstPromise = new Promise((resolve, reject) =>{

  let name = "Yousuf"

  resolve(name)

})

console.log(myFirstPromise)

