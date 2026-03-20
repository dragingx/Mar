/* CURSOR */
const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";});
document.querySelectorAll("a,.add").forEach(el=>{el.addEventListener("mouseenter",()=>cursor.classList.add("active"));el.addEventListener("mouseleave",()=>cursor.classList.remove("active"));});

/* CART */
function toggleCart(){document.getElementById("cart").classList.toggle("open");}
function addToCart(e,name){e.stopPropagation();document.getElementById("cartItems").innerHTML+=`<div>${name}</div>`;}

/* PARTICLES */
const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;canvas.height=innerHeight;
let mouse={x:0,y:0};
document.addEventListener("mousemove",e=>{mouse.x=e.x;mouse.y=e.y;});
let particles=[];
for(let i=0;i<120;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,size:Math.random()*2,vx:(Math.random()-0.5)*0.5,vy:Math.random()*1+0.2});}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        let dx=mouse.x-p.x; let dy=mouse.y-p.y; let dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){p.x-=dx*0.01;p.y-=dy*0.01;}
        p.x+=p.vx;p.y+=p.vy;if(p.y>canvas.height)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle="rgba(255,255,255,0.6)";ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize",()=>{canvas.width=innerWidth;canvas.height=innerHeight;});
