const resultadoElement = document.getElementById("resultado");

function rollDice() {
    // Genera un número aleatorio del 1 al 6 (simulando el lanzamiento de un dado)
    const numeroResultado = Math.floor(Math.random() * 6) + 1;

    // Muestra el número resultado en el dado
    resultadoElement.innerText = "El resultado es: " + numeroResultado;

    // Actualiza la clase del dado para mostrar la cara correspondiente al resultado
    actualizarClaseDado(numeroResultado);
}

function actualizarClaseDado(numeroResultado) {
    const dado = document.querySelector(".cube");

    // Elimina todas las clases de cara del dado
    dado.className = "cube";

    // Agrega la clase correspondiente al número resultado
    dado.classList.add(getClaseCara(numeroResultado));
}

function getClaseCara(numeroResultado) {
    // Devuelve la clase de cara correspondiente al número resultado
    switch (numeroResultado) {
        case 1:
            return "one::before";
        case 2:
            return "two::before";
        case 3:
            return "three::before";
        case 4:
            return "four::before";
        case 5:
            return "five::before";
        case 6:
            return "six::before";
        default:
            return ""; // Manejar otros casos si es necesario
    }
}