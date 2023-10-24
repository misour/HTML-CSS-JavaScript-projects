buttclick=document.querySelectorAll("button");
affichage=document.getElementById("result");


buttclick.forEach(el => {
    el.onclick = ()=>{
        if(affichage.value=="Infinity" || affichage.value=="error")
        affichage.value="";        
        if(el.className=="clear")
        affichage.value="";
        else if(el.className=="del"){
         if( affichage.value!="")
         affichage.value=affichage.value.slice(0,-1);
        }
        else if(el.className=="equals")
        affichage.value=caculator(affichage.value);
        else
        affichage.value=affichage.value+el.textContent;
    }
});

function caculator(value){
    let resultat ;
    try{
        resultat=eval(value)
    }catch(cause){
      resultat="error";
    }
    
return resultat;
}
