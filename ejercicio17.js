const contenedor=document.getElementById("contenedor");
const parrafos=contenedor.querySelectorAll("p");
const arrayParrafos=Array.from(parrafos);        
arrayParrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));
for (let i = 0; i < arrayParrafos.length; i++) {
    contenedor.appendChild(arrayParrafos[i]);
}