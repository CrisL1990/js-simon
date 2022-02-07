
//Contiene i 5 numeri da ricordare
let numbersToRemember = randomNumber(1, 99, 5);

//Aquisisce mainContainer da HTML e inietta la lista dei numeri da ricordare al suo interno
let mainContainer = document.getElementById("main-container")
mainContainer.innerHTML=numbersToRemember;

//Aquisisce il titolo dall'HTML
let firstTitle = document.getElementById('first-title');
let secondTitle = document.getElementById('second-title');

//Aquisisce guessed ed end-game da HTML
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

//Crea la lista dei numeri inseriti dall'utente e la compara con la lista dei numeri casuali,
//In fine visualizza il messaggio finale in base ai numeri indovinati
function usernNumbers(numbers){
    let myNumbers = [];
    let numbersrequired = numbers.length;

    //Richiede il numero dall'utente per numbersrequired volte, 
    //se il numero inserito è presente in numbers, lo inserisce in myList
    for(let i = 0; i < numbersrequired; i++){
        n = parseInt(prompt("Quali numeri erano presenti nella lista?: "))
       
        if(numbers.includes(n)){
            myNumbers.push(n);
        }
      
    };

    //Nasconde messaggio istruzioni e visualizza i numeri indovinati
    guessed.classList.remove('hide-numbers');
    guessed.classList.add('show-numbers');
    secondTitle.classList.add('hide-numbers');

    //Gestisce il messaggio di fine gioco in base a quanti numeri sono stati indovinati
    if(myNumbers.length != 0){
        guessed.innerHTML = myNumbers;
        if(myNumbers.length == 1){
            endGame.innerHTML = `Hai indovinato ${myNumbers.length} numero`;
        }
        else if(myNumbers.length == numbersrequired){
            endGame.innerHTML = `Complimenti hai indovinato tutti i numeri!`;
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




