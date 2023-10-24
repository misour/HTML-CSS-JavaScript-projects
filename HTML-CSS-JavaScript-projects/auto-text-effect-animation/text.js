let container=document.querySelector(".container");
let msg=document.createElement("p");
container.appendChild(msg); 
const msgs=["HELLO WORLD","BONJOUR TOUT LE MONDE"]
let indice=0;
let indiceC=0;
msg.style.width=0;
updateText();

 function updateText() {
    if (indiceC==0)
    msg.style.borderRight="6px solid black";
    msg.textContent=msg.textContent+msgs[indice].charAt(indiceC);
    msg.style.width="fit-content";
    indiceC++;
    if(indiceC==msgs[indice].length){
        setTimeout(()=>suprrimerText(),2000);
            indiceC=0;
            indice++;
            indice=indice%2;
    }
  else setTimeout(updateText, 400);
}

function suprrimerText(){
    if(msg.textContent!=""){
        msg.textContent=msg.textContent.slice(0,-1);
        msg.style.width="fit-content";
        setTimeout(suprrimerText, 400);
        if(msg.textContent=="")
        msg.style.borderRight="none";

    }
    else  setTimeout(updateText, 400);
}