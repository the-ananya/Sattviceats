window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(item=>{

let top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){
item.classList.add("active");
}

});

});

particlesJS("particles-js", {

particles: {

number:{
value:80
},

size:{
value:3
},

color:{
value:"#d4af37"
},

line_linked:{
enable:true,
color:"#d4af37",
opacity:.2
},

move:{
speed:1
}

}

});

emailjs.init("YOUR_PUBLIC_KEY");

document
.getElementById("contactForm")
?.addEventListener("submit", function(e){

e.preventDefault();

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
{
from_name:
document.getElementById("name").value,

reply_to:
document.getElementById("email").value,

message:
document.getElementById("message").value
}

)
.then(function(){

document.getElementById("status").innerHTML =
"✅ Message sent successfully!";

document.getElementById("contactForm").reset();

})
.catch(function(error){

document.getElementById("status").innerHTML =
"❌ Failed to send message.";

console.log(error);

});

});