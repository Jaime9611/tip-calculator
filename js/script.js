(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Z:()=>g});var t=document.querySelector("#bill-value"),n=document.querySelector("#bill-value + .input-error"),i=0;t.addEventListener("input",(function(){t.validity.valid?(n.innerHTML="",n.className="input-error",i=parseFloat(t.value)):(a(),i=0),g()}));var a=function(){t.validity.badInput?n.textContent="Value must be a number.":t.validity.rangeUnderflow&&("0"===t.value?n.textContent="Can´t be zero":n.textContent="Can´t negative"),n.className="input-error active"},r=document.querySelector("#persons"),u=document.querySelector("#persons + .input-error"),o=0;r.addEventListener("input",(function(){r.validity.valid?(u.innerHTML="",u.className="input-error",o=parseInt(r.value)):(c(),o=0),g()}));var c=function(){r.validity.badInput?u.textContent="Value must be a number.":r.validity.rangeUnderflow?"0"===r.value?u.textContent="Can´t be zero":u.textContent="Can´t negative":r.validity.stepMismatch&&(u.textContent="Value must be an integer"),u.className="input-error active"},l=document.querySelector("#custom-tip"),s=document.querySelector("#tcustom"),d=document.querySelector("#tcustom + .input-error--tips"),v=function(){s.classList.contains("input-hide")||(s.classList.add("input-hide"),s.value=""),l.classList.contains("input-hide")&&l.classList.remove("input-hide")};l.addEventListener("click",(function(e){e.preventDefault(),l.classList.contains("input-hide")||(h(),g(),l.classList.add("input-hide"),s.classList.remove("input-hide"),s.focus())})),s.addEventListener("input",(function(){if(s.validity.valid){d.innerHTML="",d.className="input-error";var e=parseInt(s.value);b(e)}else p(),b(0);g()}));var p=function(){s.validity.badInput?d.textContent="Must be a number":s.validity.rangeUnderflow?"0"===s.value?d.textContent="Can´t be zero":d.textContent="Can´t negative":s.validity.stepMismatch&&(d.className="input-error active"),d.className="input-error--tips active"},m=document.querySelectorAll("input[type='radio']"),f=0;m.forEach((function(e){e.addEventListener("change",(function(e){e.target.checked&&(f=parseInt(e.target.value)),v(),g()}))}));var y=function(){return f/100},b=function(e){return f=e},h=function(){m.forEach((function(e){e.checked&&(e.checked=!1)})),f=0},C=document.querySelector("#tip-total"),L=document.querySelector("#bill-total"),x=document.querySelector("#reset"),g=function(){if(o&&i&&y()){var e=i*y()/o,t=(i+i*y())/o;C.innerText="".concat(Math.floor(100*e)/100),L.innerText="".concat(Math.ceil(100*t)/100)}else C.innerText="0",L.innerText="0"};x.addEventListener("click",(function(e){e.preventDefault(),t.value="",i=0,r.value="",o=0,h(),v(),g()}))})();