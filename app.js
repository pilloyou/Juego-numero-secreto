let numerosecreto = GenerarNumeroSecreto();
let intentos = 1;
console.log(numerosecreto)


function asignar_texto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}


//definicion de funciones
function verificarintento () {
let numerodeusuario= parseInt(document.getElementById('valorusuario').value);
if (numerodeusuario == numerosecreto){
asignar_texto("p",`acertaste en ${intentos} ${(intentos===1) ? "vez" : "veces" }`)
document.getElementById('reiniciar').removeAttribute('disabled');

}else{
    //El usuario no acerto
    if (numerodeusuario>numerosecreto){
        asignar_texto('p','el numero es menor');

    }else{
        asignar_texto("p","el numero es mayor")
    }
    intentos++;
    limpiarcaja();
}
return;

}
function condicionesiniciales(){
    asignar_texto('h1','Juego del numero secreto!');
    asignar_texto('p','Indica un numero del 1 al 10');
    numerosecreto=GenerarNumeroSecreto();
    intentos=1;
};

//funcion para limpiar o reiniciar el juego

function limpiarcaja(){
   document.querySelector('#valorusuario').value="";
   
}


//Definicion de una funcion declarando el numero secreto
function GenerarNumeroSecreto() {
    let numerosecreto = Math.floor(Math.random() * 10) + 1;
    return numerosecreto;
  }
function reiniciar(){
    limpiarcaja();
    condicionesiniciales();
    
    document.querySelector('#reiniciar').setAttribute('disable','true');

}

condicionesiniciales();

