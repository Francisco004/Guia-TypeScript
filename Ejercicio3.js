function Ejercicio3(numero, texto) {
    if (texto != null) {
        for (var i = 0; i < numero; i++) {
            console.log(texto);
        }
    }
    else {
        console.log(numero * -1);
    }
}
Ejercicio3(5);
Ejercicio3(5, "xd");
