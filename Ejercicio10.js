function VerCadena(cadena) {
    var minusculas;
    var cantidad = 0;
    for (var i = 0; i < cadena.length; i++) {
        minusculas = cadena[i].toLowerCase();
        if (cadena[i] == minusculas) {
            cantidad++;
        }
        else {
            cantidad--;
        }
    }
    if (cantidad == cadena.length) {
        console.log("La cadena esta compuesta por caracteres en minuscula");
    }
    else if (cantidad == cadena.length * -1) {
        console.log("La cadena esta compuesta por caracteres en mayuscula");
    }
    else {
        console.log("La cadena esta compuesta por caracteres en minuscula y mayuscula");
    }
}
VerCadena("PEPE");
