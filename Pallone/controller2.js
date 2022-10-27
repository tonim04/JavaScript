let dimension=100; 

let x;
let y;

let container = document.getElementById("container"); //prende l'elemento

let image = document.getElementById("image"); //prende l'elemento con id "image" (il pallone)
image.style.fontSize="100px"; //assegnamo al pallone una dimensione di 100px

let ZoomIn=document.getElementById("ZoomIn"); //prende l'elemento che ha id ZoomIn
let ZoomOut=document.getElementById("ZoomOut");//prende l'elemento che ha id ZoomOut

ZoomIn.addEventListener("click",Ingrandisci); //quando c'è l'evento click sul pulsante ZoomIn, viene eseguita la funzione ingrandisci()
ZoomOut.addEventListener("click",Rimpicciolisci); //quando c'è l'evento click sul pulsante ZoomIn, viene eseguita la funzione Rimpicciolisci()


function Ingrandisci() {
    let pix = dimension + (dimension*10)/100;
    dimension=pix;
    image.style.fontSize=dimension +"px";
    if(dimension > 200){ //controlla se la dimensione raggiunge i 200 px
        document.getElementById("container").innerHTML = "<span style=\"font-size:200px\"id=\"image\">&#128165;</span><br><button class=\"btn btn-success\" onclick=\"window.location.reload();\">Refresh</button>"
        alert("Dimensione massima raggiunta! \n Il pallone è espoloso!"); 
    }
    //se la dimensione raggiunge 200 px, viene mostrata l'immagine di un espolsione con un bottone per refreshare la pagina
}

function Rimpicciolisci(){
    let pix = dimension - (dimension*10)/100;
    dimension=pix;
    image.style.fontSize=dimension +"px";
    if(dimension < 30){ //controlla se la dimensione raggiunge meno di 30 px
        alert("Dimensione minima raggiunta!"); 
        window.location.reload(); //la pagina viene ricaricata e la dimensione torna di default 100px
    }
}

window.addEventListener('keydown', function (e) { // rimpicciolisco e ingradisco il pallone usando le freccette ArrowUp e ArrowDown
    if ( e.key == "+"){
        Ingrandisci();
    }else if ( e.key == "-"){
        Rimpicciolisci();
    }else if (e.key == "ArrowUp") {
        if (y > 270) {
            y = y - 20;
        }
    } else if (e.key == "ArrowDown") {
        y = y + 20;
    } else if (e.key == "ArrowLeft") {
        if (x > 0) {
            x = x + 20;
        }
    } else if (e.key == "ArrowRight") {
        x = x - 20;
    }

    document.getElementById("image").style.top = y + "px";
    document.getElementById("image").style.left = x + "px";

});


