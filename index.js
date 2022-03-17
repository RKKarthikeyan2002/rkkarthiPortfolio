// Show Menu
const nav = document.getElementById("nav_menu");


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId), 
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", () =>{
            nav.classList.toggle("show");
        });
    }
}

showMenu('nav_toggle', 'nav_menu');

// Active & Remove Active
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(n => n.classList.remove("active"));

function linkAction(){
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
    // navLink.forEach(n => n.classList.remove("active"));
    this.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", linkAction));
navLink.forEach(n => n.addEventListener("click", ()=>{
    nav.classList.remove("show");   
}));

