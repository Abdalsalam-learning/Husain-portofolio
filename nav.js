const list = document.getElementById("minu");
const burger = document.getElementById("tg");
let isnav = false;
burger.addEventListener("click",()=>{
    list.style.display = (isnav?"block":"none");
    isnav = !isnav;
})
const nm = document.getElementById("name");
const mail = document.getElementById("email");
const mess = document.getElementById("message");
const btn = document.getElementById("btn");
const rgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    nm.style.backgroundColor = (nm.value?"transparent":"red");
    mail.style.backgroundColor = (mail.value.match(rgx)?"transparent":"red");
    mess.style.backgroundColor  = (mess.value?"transparent":"red");
})