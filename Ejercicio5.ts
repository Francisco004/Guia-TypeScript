function MostrarNombreApellido(nombre : string, apellido : string)
{
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellido = apellido.toUpperCase();

    console.log(nombre + ", " + apellido);
}

var nombre : string;
var apellido : string;

MostrarNombreApellido("francisco", "rocha");