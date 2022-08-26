var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var resposta1 = ("a");
var resposta2 = ("b");
var resposta3 = ("c");

var no_of_guesses; //number of guesses
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").
        value;


        //PRIMEIRA RESPOSTA

    if (user_guess != resposta1) {
        alert("Por favor, digite o código do produto")
    }
    else if (user_guess == resposta1){
        alert("Você escolheu: Camiseta do Jacaré (importado)        Será aplicado uma taxa de 20% ao valor final, totalizando: R$120,00. Aperte em OK caso concorde:");
    
    } 


         //SEGUNDA RESPOSTA

    if (user_guess != resposta2) {
        alert("Por favor, digite o código do produto")
    }
    else if (user_guess == resposta2){
        alert("Você escolheu: Perfume da França (importado)               Será aplicado uma taxa de 20% ao valor final, totalizando: R$240,00. Aperte em OK caso concorde:");

    
    } 


      //TERCEIRA RESPOSTA

      if (user_guess != resposta3) {
        alert("Por favor, digite o código do produto")
    }
    else if (user_guess == resposta3){
        alert("Você escolheu:  Sandália da Praia (importado)              Será aplicado uma taxa de 12% ao valor final, totalizando: R$134.4. Aperte em OK caso concorde:");

    
    } 

}
