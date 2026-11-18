(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mob');
b.addEventListener('click',function(){var on=m.classList.toggle('on');b.setAttribute('aria-expanded',on)});
m.addEventListener('click',function(e){if(e.target.closest('a')){m.classList.remove('on');b.setAttribute('aria-expanded','false')}});
document.querySelectorAll('.strz').forEach(function(s){
  var t=document.getElementById(s.dataset.tor),bt=s.querySelectorAll('button');
  function step(){var c=t.children[0];return c?c.getBoundingClientRect().width+16:300}
  bt[0].addEventListener('click',function(){t.scrollBy({left:-step(),behavior:'smooth'})});
  bt[1].addEventListener('click',function(){t.scrollBy({left:step(),behavior:'smooth'})});
  function upd(){bt[0].disabled=t.scrollLeft<4;bt[1].disabled=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;s.style.display=(t.scrollWidth<=t.clientWidth+4)?'none':''}
  t.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);requestAnimationFrame(upd);
});
document.querySelectorAll('.tor').forEach(function(t){
  var x0,s0,down=false,moved=false;
  t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'||t.scrollWidth<=t.clientWidth)return;down=true;moved=false;x0=e.clientX;s0=t.scrollLeft});
  window.addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>5){moved=true;t.classList.add('drag')}if(moved)t.scrollLeft=s0-dx});
  window.addEventListener('pointerup',function(){if(!down)return;down=false;if(moved){var w=t.children[0].getBoundingClientRect().width+16;var tg=Math.round(t.scrollLeft/w)*w;t.classList.remove('drag');t.scrollTo({left:tg,behavior:'smooth'})}});
  t.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
  t.addEventListener('dragstart',function(e){e.preventDefault()});
});
var lb=document.getElementById('lb'),li=lb.querySelector('img');
document.addEventListener('click',function(e){var x=e.target.closest('[data-big]');if(!x)return;li.src=x.dataset.big;li.alt=(x.querySelector('img')||{}).alt||'';lb.classList.add('on');lb.querySelector('button').focus()});
lb.addEventListener('click',function(e){if(e.target!==li)lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
document.getElementById('form').addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block'});
document.getElementById('rok').textContent=new Date().getFullYear();
var mp=document.getElementById('mapa');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){var f=document.createElement('iframe');f.src=mp.dataset.src;f.loading='lazy';f.title='Mapa: ul. Jerzego Waldorffa 34, Warszawa';f.referrerPolicy='no-referrer-when-downgrade';mp.appendChild(f);io.disconnect()}},{rootMargin:'300px'});io.observe(mp)}
})();
