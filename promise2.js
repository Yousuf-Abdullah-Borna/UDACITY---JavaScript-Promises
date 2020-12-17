//HOW TO WORK WITH API USING PROMISES

//PROMISE USES FETCH() API TO WORK WITH JSON DATA
//FETCH ACTUALLY TAKES URL AS AN ARGUMENT
//HERE FETCH WORKS AS A PROMISE SO WE COULD USE THEN
fetch("http://jsonplaceholder.typicode.com/users").then(

//THE CALLBACK FUNCTION WILL RECEIVE A RESPONSE FROM THE API
(response)=>{
    //console.log(response);
    //.JSON GAVE US A PROMISE
    response.json();
    //console.log(response.status)
    //console.log(response.url)
}

).then( (body)=>{

     console.log(body);

}).catch(
    
     (err)=>{

          console.log("failed to fetch")
     }
)


