const carrusel = document.querySelector(".carrusel"),
flechasIconos = document.querySelectorAll(".contenido i");
var imagenes=['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png']

img1 = carrusel.querySelectorAll("img")[0],
img2 = carrusel.querySelectorAll("img")[1],
img3 = carrusel.querySelectorAll("img")[2];

moverNext=()=>{
    var primerElemento=imagenes[0];
    arrayTemp=imagenes.slice(1,imagenes.length);
    arrayTemp[imagenes.length-1]=primerElemento;
    imagenes= arrayTemp;
    console.log( arrayTemp)
    img1.src=imagenes[0];
    img2.src=imagenes[1];
    img3.src=imagenes[2];
}

moverPrev=()=>{
    var arrayTemp=[];
    arrayTemp[0]=imagenes[imagenes.length-1];
    for(let i=0; i<imagenes.length; i++){
        if (i>=1){
            arrayTemp[i] = imagenes[i-1];

        }
    }
    
    imagenes = arrayTemp;
    console.log(imagenes)
    img1.src=imagenes[0];
    img2.src=imagenes[1];
    img3.src=imagenes[2];


}


moverNextAndBack = (icon)=>{
   
    if (document.querySelectorAll(".contenido i")[0] == icon){
        moverPrev(); 
    }else if(document.querySelectorAll(".contenido i")[1] == icon){
        moverNext();  
    }

}


flechasIconos.forEach(icon=>{
    icon.addEventListener("click", ()=>{
       moverNextAndBack(icon);
    });

});




setInterval(function(){
    moverNext();  
},2000);
