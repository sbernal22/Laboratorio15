const primerUl=document.querySelector("ul");
const items=primerUl.querySelectorAll("li");
const ultimoLi=items[items.length-1];
primerUl.insertBefore(ultimoLi, primerUl.firstChild);