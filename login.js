document.getElementById("loginForm").addEventListener("submit", async function(e){

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const response = await fetch("http://localhost:5000/api/doctor/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({email,password})

});

const data = await response.json();

if(data.success){

window.location.href="doctor-dashboard.html";

}
else{

document.getElementById("message").innerText="Invalid login";

}

});