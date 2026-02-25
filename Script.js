// typing animation
const words=["Junior Software Developer","Web Developer","Problem Solver"];
let i=0,j=0,deleting=false;
const typing=document.querySelector(".typing");

function type(){
let current=words[i];
typing.textContent=current.substring(0,j);

if(!deleting && j++===current.length){
deleting=true;
setTimeout(type,1200);
return;
}

if(deleting && j--===0){
deleting=false;
i=(i+1)%words.length;
}

setTimeout(type,deleting?50:100);
}
type();

// scroll reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});

// contact form
document.getElementById("contactForm").addEventListener("submit",e=>{
e.preventDefault();
document.querySelector(".form-status").textContent="✅ Message sent successfully!";
document.getElementById("contactForm").reset();
});