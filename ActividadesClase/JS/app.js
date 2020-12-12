elementos = parseInt(prompt('Ingrese el numero de elementos en la lista'));

arreglo = [];
for (let elemento = 0; elemento < elementos; elemento++)
{
    arreglo.push(parseInt(prompt('Ingrese el elemento ' + (elemento + 1) + ": ")));
}

// imprimir en consola los elementos de la lista
var valorMaximo = -99999;
for(var i = 0; i < arreglo.length; i++)
{
    if(arreglo[i]>valorMaximo)
    {
        valorMaximo = arreglo[i];
    }
}

alert("El numero maximo de la lista es: " + valorMaximo)
