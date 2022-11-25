let nav= document.getElementById('navMenu');
let humburger=document.getElementById('humburger');
let close =document.getElementById('close');

humburger.addEventListener('click', ()=>{
    nav.style.translate="0";
});

close.addEventListener('click',()=>{
    nav.style.translate="100vw";
})


