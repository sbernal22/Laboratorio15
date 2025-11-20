const section=document.getElementById("seccion");
const h2Original=section.querySelector("h2");
const nuevoH2=document.createElement("h2");
nuevoH2.textContent="Título nuevo";
section.appendChild(nuevoH2);        
const nuevoP=document.createElement("p");
nuevoP.textContent="Descripción generada";
section.appendChild(nuevoP);        
const ul=document.createElement("ul");
for(let i=1; i<=3; i++){
    const li = document.createElement("li");
    li.textContent="Ítem " + i;
    ul.appendChild(li);
}
section.appendChild(ul);        
if (h2Original) {
    h2Original.remove();
}