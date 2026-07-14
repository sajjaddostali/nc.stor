//===============================
// HEADER ON SCROLL
//===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";
        header.style.height = "80px";

    } else {

        header.style.background = "rgba(255,255,255,.45)";
        header.style.boxShadow = "none";
        header.style.height = "90px";

    }

});


//===============================
// SMOOTH SCROLL
//===============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior: "smooth"

        });

    });

});


//===============================
// FADE IN ON SCROLL
//===============================

const sections = document.querySelectorAll(

".products,.summer,.about,.reviews,footer"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:.2});


sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(80px)";

    section.style.transition=".8s";

    observer.observe(section);

});


//===============================
// HERO BUTTON
//===============================

const heroBtn = document.querySelector(".hero-content button");

heroBtn.addEventListener("click",()=>{

    document.querySelector("#products").scrollIntoView({

        behavior:"smooth"

    });

});


//===============================
// PRODUCT BUTTONS
//===============================

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        alert("این بخش در نسخه نهایی فروشگاه تکمیل خواهد شد.");

    });

});


//===============================
// ICON ANIMATION
//===============================

const icons = document.querySelectorAll(".icons i");

icons.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(10deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0deg)";

    });

});


//===============================
// ACTIVE MENU
//===============================

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


//===============================
// HERO TEXT EFFECT
//===============================

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-content");

    hero.style.opacity="0";

    hero.style.transform="translateY(50px)";

    hero.style.transition="1s";

    setTimeout(()=>{

        hero.style.opacity="1";

        hero.style.transform="translateY(0)";

    },300);

});