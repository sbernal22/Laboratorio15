const nuevo=document.createElement("h3");
nuevo.textContent="Elemento nuevo";
const referencia=document.getElementsByTagName("p")[0];
referencia.parentNode.insertBefore(nuevo, referencia);