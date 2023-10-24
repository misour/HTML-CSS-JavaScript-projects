let age=document.getElementById("birthday");
let btnCalcule=document.querySelector(".birthday")
let parresultat=document.querySelector(".resultatB")

btnCalcule.onclick = function(){
    if(age.value!='')
    calcule_age(age.value);
}

function calcule_age(value){
    dateBirdth=new Date(value);
    datenow = new Date();
    resultat="Your Age is : "
    dayA=datenow.getDate() - dateBirdth.getDate();
    monthA=datenow.getMonth() - dateBirdth.getMonth();
    yearA=datenow.getFullYear()- dateBirdth.getFullYear();
    if(dayA<0){
        if(monthA<=0){
            monthA+=12;
            yearA--;
        }
        dayA+=dayofmonth((datenow.getMonth()+12)%13);
        monthA--;
    }
    if(monthA<0){
        monthA+=12;
        yearA--;
    }
    if(yearA!=0){
          resultat=resultat+yearA+" years"
    }
    if(monthA!=0){
        if(resultat.includes("years"))
        resultat=resultat+" and "+monthA + " months "
        else resultat=resultat+monthA + " months "
    }
    if(dayA!=0){
        if(resultat.includes("years") || resultat.includes("months"))
        resultat=resultat+" and "+dayA + " Days "
        else resultat=resultat+dayA + " Days "
    }
   if(yearA==0 && dayA==0 && monthA==0)
   parresultat.textContent="your birthday is not valide";
   else {
   parresultat.textContent=resultat;    
   }

    
}


function dayofmonth(month,year){
    let a;
    switch(month){
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 9 :
        case 12 :a=31; break;

        case 4 :
        case 6 :
        case 9 :
        case 11:a=30 ; break;
        default :
        if(year%4==0)
            a=29 ;
        else a=29 ;
    }
    return a;
}
datenow = new Date();

