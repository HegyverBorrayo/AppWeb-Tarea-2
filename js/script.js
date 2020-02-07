var canvas,contexto,img;
var posx = 150, posy = 60;
var btnAgregar, btnEliminar, selectOrigen, valueInput;

function init() {
    /* Canvas */
    canvas = document.getElementById("circulo");
    contexto = canvas.getContext('2d');
    img = new Image();
    img.src = 'img/circulo.png';
    img.onload = () => contexto.drawImage(img, posx, posy);
    window.addEventListener("keydown", precionaTecla, false);

    /* Agregar elemento */

    btnAgregar = document.getElementById('btnAgregar');
    valueInput = document.getElementById('elementAdd');
    btnAgregar.onclick = addElement;

    /* Eliminar elemento */
    btnEliminar = document.getElementById('btnEliminar');
    selectOrigen = document.getElementById('origen');
    btnEliminar.onclick = deleteElement;
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

function addElement(){
    let valorAgregar = valueInput.value;
    if (valorAgregar != "") {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(valorAgregar) );
        opt.value = valorAgregar
        selectOrigen.appendChild(opt);
    }
}

function deleteElement(){
    selectOrigen.options[selectOrigen.selectedIndex] = null;
}

init();