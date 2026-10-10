const motion = matchMedia('(prefers-reduced-motion: reduce)');
// The extra desktop photograph is hidden below the desktop breakpoint.
const onlinePhoto=document.querySelector('#desktop-online-photo');
document.querySelector('#online .card-body').prepend(onlinePhoto.content.cloneNode(true));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
if (!motion.matches && 'IntersectionObserver' in window) {
 document.documentElement.classList.add('motion-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
 }),{threshold:.06});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const sticky=document.querySelector('.sticky-contact');
sticky.inert=true;
const hero=document.querySelector('.hero');
const contact=document.querySelector('#contato');
const footer=document.querySelector('.footer');
const progress=document.querySelector('.reading-progress');
let queued=false;
function updateScroll(){
 queued=false;
 const height=document.documentElement.scrollHeight-innerHeight;
 progress.style.transform='scaleX('+(height>0?Math.min(1,scrollY/height):0)+')';
 const show=hero.getBoundingClientRect().bottom<document.querySelector('.topbar').offsetHeight&&contact.getBoundingClientRect().top>innerHeight&&footer.getBoundingClientRect().top>innerHeight;
 sticky.classList.toggle('visible',show);
 sticky.setAttribute('aria-hidden',String(!show));
 sticky.inert=!show;
}
addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateScroll)}},{passive:true});
addEventListener('resize',updateScroll);
updateScroll();
const track=document.querySelector('.student-track');
const slides=[...track.querySelectorAll('.student-slide')];
const prev=document.querySelector('.carousel-prev');
const next=document.querySelector('.carousel-next');
const count=document.querySelector('.gallery-count');
const pad=n=>String(n).padStart(2,'0');
function step(){return slides[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||0)}
function updateGallery(){
 const max=Math.max(0,track.scrollWidth-track.clientWidth);
 const i=Math.min(slides.length-1,Math.round(track.scrollLeft/step()));
 const visible=Math.max(1,Math.round((track.clientWidth+parseFloat(getComputedStyle(track).columnGap||0))/step()));
 count.textContent=pad(i+1)+(visible>1?'–'+pad(Math.min(slides.length,i+visible)):'')+' / '+pad(slides.length);
 prev.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=max-2;
}
function move(direction){track.scrollTo({left:Math.max(0,Math.min(track.scrollWidth-track.clientWidth,track.scrollLeft+step()*direction)),behavior:motion.matches?'instant':'smooth'})}
prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
track.addEventListener('scroll',updateGallery,{passive:true});
track.addEventListener('keydown',e=>{
 if(e.target!==track)return;
 if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){
  e.preventDefault();
  if(e.key==='ArrowLeft'||e.key==='ArrowRight')move(e.key==='ArrowRight'?1:-1);
  else track.scrollTo({left:e.key==='Home'?0:track.scrollWidth,behavior:motion.matches?'instant':'smooth'});
 }
});
if('ResizeObserver'in window)new ResizeObserver(updateGallery).observe(track);else addEventListener('resize',updateGallery);
updateGallery();
const gallery=[...document.querySelectorAll('.gallery-open')];
const box=document.querySelector('.lightbox');
const boxPrev=box.querySelector('.lightbox-prev');
const boxNext=box.querySelector('.lightbox-next');
let current=0;
function show(index){
 current=Math.max(0,Math.min(gallery.length-1,index));
 const item=gallery[current];
 box.querySelector('img').src=item.querySelector('img').getAttribute('src');
 box.querySelector('img').alt=item.dataset.caption;
 box.querySelector('.dialog-bottom p').textContent=item.dataset.caption;
 box.querySelector('.lightbox-count').textContent=pad(current+1)+' / '+pad(gallery.length);
 boxPrev.disabled=current===0;boxNext.disabled=current===gallery.length-1;
}
function setupDialog(dialog,closeButton){
 let opener;
 dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');opener?.focus();updateScroll()});
 closeButton.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{
  if(e.target!==dialog)return;
  const b=dialog.getBoundingClientRect();
  if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();
 });
 return button=>{opener=button;dialog.showModal();document.body.classList.add('dialog-open')};
}
const openGallery=setupDialog(box,box.querySelector('.lightbox-close'));
gallery.forEach((button,index)=>button.addEventListener('click',()=>{show(index);openGallery(button)}));
boxPrev.addEventListener('click',()=>show(current-1));boxNext.addEventListener('click',()=>show(current+1));
box.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(current+(e.key==='ArrowRight'?1:-1))}});
const proof=document.querySelector('.testimonial-dialog');
const openProof=setupDialog(proof,proof.querySelector('.testimonial-close'));
document.querySelector('.testimonial-open').addEventListener('click',e=>openProof(e.currentTarget));

