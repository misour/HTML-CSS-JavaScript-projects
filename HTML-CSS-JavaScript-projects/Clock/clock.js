let datenow = new Date()
let degs=6*datenow.getSeconds();
let degm=6*datenow.getMinutes();
let degh=(datenow.getHours()%12)*30 + datenow.getMinutes()/12;

let count =datenow.getMinutes()%12;


const sec=document.querySelector(".second");
const mint=document.querySelector(".minute")
const hr=document.querySelector(".hour")

sec.style.setProperty('--degs',degs+'deg');
mint.style.setProperty('--degm',degm+'deg');
hr.style.setProperty('--degh',degh+'deg');

function secondmove(deg){
    if(deg==360)
    deg=0;
    else deg+=6;
  return deg
}

function minutemove(deg){
    count++;
    if(count==12){
        count=0;
        degh=(degh+1)%360;
        hr.style.setProperty('--degh',degh+'deg');
    }
    if(deg==360)
    deg=0;
    else deg+=6;
  return deg
}

setInterval(function(){
    degs=secondmove(degs);
    if(degs==0){
        degm=minutemove(degm);
      mint.style.setProperty('--degm',degm+'deg');
    }
sec.style.setProperty('--degs',degs+'deg');
},1000)
