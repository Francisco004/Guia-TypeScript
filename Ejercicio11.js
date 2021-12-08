function Ejercicio11(cadena) {
    var contador = 0;
    var cadenaSinEspacio = cadena;
    cadenaSinEspacio = cadenaSinEspacio.split(' ').join('');
    cadenaSinEspacio = cadenaSinEspacio.toLowerCase();
    for (var i = 0; i < cadenaSinEspacio.length; i++) {
        if (cadenaSinEspacio[i] == cadenaSinEspacio[cadenaSinEspacio.length - (i + 1)]) {
            contador++;
        }
        else {
            break;
        }
    }
    if (cadenaSinEspacio.length == contador) {
        console.log("El string es palindromo");
    }
    else {
        console.log("El string no es palindromo");
    }
}
Ejercicio11("La ruta nos aporto otro paso natural");
