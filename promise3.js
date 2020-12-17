fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => response.json())
.then( (body)=>{ 
    console.log(body);

    //AS BODY IS AN ARRAY WE CAN USE MAP 
    // TO ITERATE THE ARRAYS

    body.map( (person)=>{

          console.log(person.name)
    })
})
.catch( (err) => {console.log("Fetch error")})