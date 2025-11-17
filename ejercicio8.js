const colores = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
const divs = document.getElementsByTagName("div");
let i=0;
for(const div of divs){
    div.style.backgroundColor=colores[i];
    i++;
}