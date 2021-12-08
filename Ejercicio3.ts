function Ejercicio3(numero : number, texto? : string) : void
{
    if(texto != null)
    {
        for(var i : number = 0; i < numero; i++)
        {
            console.log(texto);
        }
    }
    else
    {
        console.log(numero * -1);
    }
}

Ejercicio3(5);
Ejercicio3(5,"xd");