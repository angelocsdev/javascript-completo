let podio=4

switch(podio) {
    case 1:
        console.log("Primeiro lugar!")
        break // -> usado a cada final de "case"
    case 2:
        console.log("Segundo lugar!")
        break
    case 3:
        console.log("Terceiro lugar!")
        break
    case 4: case 5: case 6: // -> dá pra usar vários cases em uma linha!
        console.log("Prêmio de participação!")
        break
    default:
        console.log("Não subiu ao pódio!")
        break
}