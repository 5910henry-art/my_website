document.addEventListener("DOMContentLoaded", function() {
    // ----- DARK MODE -----
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    themeToggle.addEventListener("click", () => {
        if(body.classList.contains("light")){
            body.classList.replace("light", "dark");
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            body.classList.replace("dark", "light");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });

    // ----- TYPEWRITER EFFECT -----
    const headerText = document.getElementById("header-text");
    const text = "Hi, I’m Henry 🌍";
    let index = 0;
    function typeWriter(){
        if(index < text.length){
            headerText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    if(headerText) typeWriter();

    // ----- SLIDE-IN ANIMATIONS -----
    const slideElements = document.querySelectorAll(".slide-left, .slide-right");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.1 });

    slideElements.forEach(el => observer.observe(el));

    // ----- PARTICLE BACKGROUND (Simple Version) -----
    const canvas = document.getElementById("particle-canvas");
    if(canvas){
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = header.offsetHeight || 400;
        const particles = [];
        for(let i=0;i<100;i++){
            particles.push({
                x: Math.random()*canvas.width,
                y: Math.random()*canvas.height,
                r: Math.random()*2+1,
                dx: (Math.random()-0.5)*1.5,
                dy: (Math.random()-0.5)*1.5
            });
        }
        function animateParticles(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            particles.forEach(p=>{
                ctx.beginPath();
                ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                ctx.fillStyle = "#1e3c72";
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if(p.x<0 || p.x>canvas.width) p.dx*=-1;
                if(p.y<0 || p.y>canvas.height) p.dy*=-1;
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = header.offsetHeight || 400;
        });
    }
});
// Side nav open/close
const sideNav = document.getElementById("side-nav");
const openBtn = document.getElementById("open-nav");
const closeBtn = document.getElementById("close-nav");

openBtn.addEventListener("click", () => sideNav.style.width = "250px");
closeBtn.addEventListener("click", () => sideNav.style.width = "0");

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Slide-in animations
const slideElems = document.querySelectorAll(".slide-left, .slide-right");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("slide-in");
        }
    });
}, {threshold:0.3});
slideElems.forEach(el => observer.observe(el));

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if(name === "" || email === "" || message === ""){
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    contactForm.reset();
});

