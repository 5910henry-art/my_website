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
