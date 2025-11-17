const elemLi= document.getElementsByTagName("li");
for(const elemento of elemLi){
    elemento.classList.add("resaltado");
    elemento.classList.remove("oculto");
}