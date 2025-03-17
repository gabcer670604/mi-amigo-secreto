// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let numeroMaximo = 5;
let intentos = 1;

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function verificaCaja() {
    // verifica que el campo amigo si este vacío envía un mensaje
    let amigoHTML = document.getElementById('amigo').value
    if (amigoHTML == '') {
        alert("Por favor, inserte un nombre");
        return;        
    }
}

function muestraArreglo(element, arr) {
    document.getElementById(element).innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        // muestra los nombres capturados en forma ascendente
        document.getElementById(element).innerHTML +=
        `<li> ${arr[i]} </li>`
    }
}

function agregarAmigo() {
    verificaCaja();
    let amigoAlta = document.getElementById('amigo').value;
    if (amigoAlta != '') {
        if (numeroMaximo >= intentos) {
            // al escribir los nombres en el campo amigo son visibles en el campo de lista ordednada listaAmigos 
            amigos.push(amigoAlta);
            muestraArreglo("listaAmigos", amigos);
            intentos++;
            limpiarCaja();
         }
    }
  }

  function condicionesIniciales() {
    intentos = 1;
    limpiarCaja();
  }
function sortearAmigo() {
    // verifica que el arreglo no este vacío antes de sortearse
    if (amigos.length == 0) {
        alert("El arreglo esta vacío");
        return;
    } 
    // verifica la cantidad de amigos capturados, si son menor de 5 envía un mensaje} 
    if (intentos-1 < numeroMaximo) {
        alert(`Le falta capturar más amigos, solo ha capturado: ${intentos-1} ${(intentos-1 === 1) ? 'amigo' : 'amigos'}, deben ser ${numeroMaximo} amigos `);
        return;
    }
    else {
        // genera un número aleatorio y muestra el amigo sorteado aleatoriamente
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo);
        let amigoSorteado = (amigos[numeroGenerado]);
        //borra la información del arreglo amigos y también de listaAmigos
        let elementosRemovidos = amigos.splice(0,amigos.length);
        muestraArreglo("listaAmigos", amigos);
        // muestra el nombre del amigo sorteado aleatoriamente
        document.querySelector('#resultado').innerHTML +=
        `El amigo secreto sorteado es: ${amigoSorteado}`;
        condicionesIniciales();
    }
    return;
}

condicionesIniciales();