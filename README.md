# amigo-secreto
El objetivo de este programa es capturar nombres de amigos y en forma aleatoria hace la selección del nombre.

- Valida que no se puede capturar campo vacío en caso contrario es válido.
- Al ir capturando los nombres de los amigos estos aparecen en forma ascente en el campo listaAmigos con la función muestraArreglo("listaAmigos", amigos);.
- La cantidad de nombres de amigos capturar se puede modificar el valor numérico de la variable numeroMaximo por el número que desee.
- Al oprimir el botón de Sortear amigo valida que no este vacío el arreglo y sea la cantidad total de amigos a capturar, si es menor envía un mensaje indicando la cantidad de amigos capturados.
- Se genera el número aleatorio Math.floor(Math.random()*numeroMaximo).
- Con el resultado del número aleatorio se le pasa al arreglo amigo para presentar el nombre del amigo sorteado en el campo resultado.
- Con la instrucción amigos.splice(0,amigos.length) se eliminan los nombres del arreglo amigos y con la función muestraArreglo("listaAmigos", amigos); se borran de listaAmigos.
- Se inicializan los valores.
- El programa principal es index.html