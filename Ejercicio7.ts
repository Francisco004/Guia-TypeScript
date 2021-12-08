function esPrimo(numero : number) {
    
    for(var i : number = 2, raiz = Math.sqrt(numero); i <= raiz; i++)
    {
        if(numero % i === 0)
        {
            return false;
        } 
    }
        
    return numero > 1;
}  

var contador : number = 0;

for (var x : number = 0; x <= 100; x++) 
{
    if (contador <= 20)
    {
        if(esPrimo(x))
        {
            console.log("El número " + x + " es primo");
            contador++;
        }
    }
    else
    {
        break;
    }
}