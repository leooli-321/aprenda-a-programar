let prompt = require("prompt");
let opcao;


console.log("Escolha o produto desejado:");
console.log("a, b ou c");


    console.log("a: Camiseta do Jacaré = R$100");
    console.log("b: Perfume Francês = R$200");
    console.log("c: Sandália da praia = R$120");


prompt.start(opcao);
prompt.get(["opcao"])

//Opções:

if (opcao == "a") {

    console.log("Atenção! Este é um produto importado, será aplicado uma taxa de 20% do valor total")

} else if (opcao == "b") {
    console.log("Atenção! Este é um produto importado, será aplicado uma taxa de 20% do valor total")

} else if (opcao == "c") {
    console.log("Atenção! Este é um produto importado, será aplicado uma taxa de 20% do valor total")

}



{
    console.log("Você escolheu o produto " + opcao + " ");
};


if (prompt.start == null) {
    console.log ("Por favor, selecione uma letra")
} 
