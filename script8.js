function aleatorio (min, max) {
    return Math.floor(Math.random()*(max - min +1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada ==1) {
        resultado = "Piedra"
    } else if (jugada ==2) {
        resultado = "Papel"
    } else if (jugada ==3) {
        resultado = "Tijera"
    } else {
        resultado = "Elegiste mal"
    } 
    return resultado  
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

//Mientras que triunfos sea menor que 3 y perdidas sea menor que 3, va a suceder la funcion dentro de while.
while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio (1,3)
    jugador = prompt("Presiona: 1 para piedra, 2 para papel, 3 para tijera")

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    //Eleccion de jugador contra la eleccion de pc
    if (pc == jugador) {
        alert("¡EMPATE!")
    } else if (jugador == 1 && pc == 3) {
        alert("¡GANASTE!")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1 ) {
        alert("¡GANASTE!")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2 ) {
        alert("¡GANASTE!") 
        triunfos = triunfos + 1  
    } else {
        alert("¡PERDISTE!")
        perdidas = perdidas + 1
    }
} 

alert ("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")