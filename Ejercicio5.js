function MostrarNombreApellido(nombre, apellido) {
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.toUpperCase();
    console.log(nombre + ", " + apellido);
}
var nombre;
var apellido;
MostrarNombreApellido("francisco", "rocha");
