var n=100;
var contador = 0;
var primeNumbers = "Estes números são primos: ";

for(var i=2; i<=n; ++i)

{
    contador=0;
    for(var j=2; j<=n; ++j)
    {
        if(i>=j && i%j == 0)
        {
            ++contador;
        }

    }
    if(contador == 1)
        {
            primeNumbers = primeNumbers + i + "  ";
        }

}
console.log(primeNumbers);
