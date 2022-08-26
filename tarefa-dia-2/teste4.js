var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var aswer = ("a", "b", "c");
var no_of_guesses; //number of guesses
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").
        value;

    if (user_guess != aswer) {
        alert(" Por favor, escolha um produto")
    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if (user_guess != aswer) {

            msg1.textContent = "Você digitou errado :(";
            msg2.textContent = "Gostaria de tentar novamente?" +
                no_of_guesses;
            msg3.textContent = "Você digitou: " + guessed_nums;

        } else if (user_guess == answer){
            msg1.textContent ("Este é o seu produto")
        }

        

        //else if (user_guess > answer)

           // msg1.textContent = "Você digitou errado :(";
            //msg2.textContent = "Gostaria de tentar novamente?" +
            //no_of_guesses;
            //msg3.textContent = "Você digitou: " + guessed_nums;
    //}
    } 

}
