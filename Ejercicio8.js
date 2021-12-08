function Factorial(numero) {
    var total = 1;
    for (var i = 1; i <= numero; i++) {
        total = total * i;
    }
    console.log("El factorial de " + numero + " es: " + total);
}
Factorial(5);
