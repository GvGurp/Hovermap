var now = new Date(); 
var uur = now.getHours(); 

if (uur <6){
    alert("Goedenacht");
} 
else if (uur <12){
    alert("Goedenmorgen ");
}
else if (uur <18 ){
    alert("Goedenmiddag");
}
else if(uur < 24){
    alert("Goedenavond"); 
}