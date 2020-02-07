var canvas;
var contexto;
var img;
var posx = 150, posy = 60;
var arrOrigen, arrDestino;
var origen, destino;
var btnMover;
var idSw, btnConsulta;

function init() {
    arrOrigen = ["uno", "dos", "tres", "cuatro"];
    arrDestino = [];
    origen = document.getElementById("origen");
    destino = document.getElementById("destino");
    btnMover = document.getElementById("btnMover");
    cargaArregloSelect(arrOrigen, origen);
    cargaArregloSelect(arrDestino, destino);
    idSw = document.getElementById("idSW");
    canvas = document.getElementById("circulo");
    contexto = canvas.getContext('2d');
    img = new Image();
    img.src = 'img/circulo.png';
    img.onload = () => contexto.drawImage(img, posx, posy);
    window.addEventListener("keydown", precionaTecla, false);
}


function precionaTecla(e) {
    let diff = 6;
    switch (e.keyCode) {
        case 37 : //izq
            if (posx > 0) {
              posx = posx - diff;
            }
            break;
        case 38 : // up
            if ((posy + img.height) >= (diff+img.height)) {
                posy = posy - diff;
            }
            break;
        case 39 : //der
            if (posx + img.width < canvas.width ) {
               posx = posx + diff;
            }
            break;
        case 40 : //abajo
            if ((posy+img.height) <= canvas.height) {
                posy = posy + diff;
            }
            break;
    }
    dibujarNave();
}

function dibujarNave() {
    contexto.clearRect(0,0, canvas.width, canvas.height);
    contexto.drawImage(img, posx, posy);
}

function cargaArregloSelect(arr, sel) {
    //borraSelect(sel);
    arr.forEach(x => {
        let option = document.createElement("option");
        option.text = x;
        sel.add(option);
    });
}

init();