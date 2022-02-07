
//Contiene i 5 numeri da ricordare
let numbersToRemember = randomNumber(1, 99, 5);

//Aquisisce mainContainer da HTML e inietta la lista dei numeri da ricordare al suo interno
let mainContainer = document.getElementById("main-container")
mainContainer.innerHTML=numbersToRemember;

//Aquisisce il titolo dall'HTML
let firstTitle = document.getElementById('first-title');
let secondTitle = document.getElementById('second-title');

let guessed = document.getElementById('guessed');

let endGame = document.getElementById('end-game');

//Richiama la funzione hideNumbers dopo 30 secondi
setTimeout(hideNumbers, 3000);

//Aggiunge la classe hide-numbers al container con i numeri da ricordare
function hideNumbers(){
    mainContainer.classList.add('hide-numbers');
    firstTitle.classList.add('hide-numbers');

    let playerContainer = document.getElementById('player-container');
    
    setTimeout(function(){
        playerContainer.classList.remove('hide-numbers');
        playerContainer.classList.add('show-numbers');

        setTimeout(function(){
            usernNumbers(numbersToRemember);
        }, 500)
        
    }, 50);

    
    return;
}

//Crea una lista di numeri compresi tra min e max, la lista conterrà tanti numeri quanti numbersQuantity
function randomNumber(min, max, numbersQuantity){

    //Inizializza una lista per contenere i numeri da indovinare
    numbersList = [];

    //Inizializza la variabile a cui verrà assegnato ogni numero estratto
    let number;

    //Aggiunge i numeri estratti alla lista
    for(let i = 0; i< numbersQuantity; i++){
        number = Math.floor(Math.random() * (max - min +1)) + min;
        numbersList.push(number);
    }

    return numbersList;
}

//Crea la lista dei numeri inseriti dall'utente
function usernNumbers(numbers){
    let myNumbers = [];
    let numbersrequired = numbers.length;

    for(let i = 0; i < numbersrequired; i++){

        n = parseInt(prompt("Quali numeri erano presenti nella lista?: "))

        numbers.forEach(element => {
            if(n == element){
                myNumbers.push(n);
            }
    
        
        });

        
    };

    guessed.classList.remove('hide-numbers');
    guessed.classList.add('show-numbers');
    secondTitle.classList.add('hide-numbers');

    if(myNumbers.length != 0){
        guessed.innerHTML = myNumbers;
        if(myNumbers.length == 1){
            endGame.innerHTML = `Hai indovinato ${myNumbers.length} numero`;
        }
        else{
            endGame.innerHTML = `Hai indovinato ${myNumbers.length} numeri`;
        }
        
    }
    else{
        guessed.innerHTML = "LOOSER!!!"
        endGame.innerHTML = `Hai indovinato 0 numeri`
    }
    
    return;
}




