// Add your code here
/*
fetch(url, JS object argument <-- we will name X) this goes LAST!(SENDS THE POST REQUEST)
.then 
.then
.catch

JS object Argument has 3 core components, verb, header, and body
const X = {
    method: "POST" <-- POST is request, 
    headers:{
        Content-Type: .../json <-- first header
        Accept: .../json <-- 2nd header
    }
    /body: DATA GOES HERE. (must be a string, not text. JSON.stringify())
    body: JSON.stringify({ add the objects to but converted to JSON})
}

*/


function submitData(name,email){
return fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({name:name,email:email})
})
.then(function(response){
    return response.json()
})
.then(function(data){
    
    const p = document.createElement("p")
    p.innerHTML = data.id
    document.body.appendChild(p)
    console.log(data.id)
})
.catch(function(error){
    const p = document.createElement("p")
    p.innerHTML = error
 document.body.appendChild(p)
    console.log(error)
})
}