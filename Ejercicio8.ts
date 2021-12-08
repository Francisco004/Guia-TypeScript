function Factorial (numero : number)
{
	var total : number = 1; 

	for (var i : number =1; i <= numero; i++)
    {
		total = total * i; 
	}

	console.log("El factorial de " + numero + " es: " + total);
}

Factorial(5);