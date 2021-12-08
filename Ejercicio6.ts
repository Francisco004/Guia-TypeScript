function Cubo(numero : number) : number
{
    return Math.pow(numero,3);
}

function MostrarCubo(numero : number) 
{
    console.log(Cubo(numero));
}

MostrarCubo(5);