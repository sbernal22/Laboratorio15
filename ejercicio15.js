const articles=document.getElementsByTagName("article");
const primerArticle=articles[0];
let clon=primerArticle.cloneNode(true);
const main=document.querySelector("main");
main.appendChild(clon);