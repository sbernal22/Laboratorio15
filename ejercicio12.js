const elemP=document.getElementById("parrafo");
const elemDiv=document.createElement("div");
elemDiv.textContent="Párrafo reemplazado";
elemP.parentNode.insertBefore(elemDiv, elemP);
elemP.remove();