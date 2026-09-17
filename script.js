const revealItems=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.16,rootMargin:'0px 0px -20px 0px'});
revealItems.forEach((item)=>revealObserver.observe(item));
const heroArt=document.querySelector('.hero-art');
const artCard=document.querySelector('.art-card');
if(heroArt&&artCard){heroArt.addEventListener('pointermove',(event)=>{const rect=heroArt.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width;const y=(event.clientY-rect.top)/rect.height;artCard.style.transform=`rotateX(${(0.5-y)*18}deg) rotateY(${(x-0.5)*18}deg)`});heroArt.addEventListener('pointerleave',()=>{artCard.style.transform='rotateX(8deg) rotateY(-8deg)'})}