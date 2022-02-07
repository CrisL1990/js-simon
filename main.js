
//Contiene i 5 numeri da ricordare
let numbersToRemember = randomNumber(1, 99, 5);

//Aquisisce mainContainer da HTML e inietta la lista dei numeri da ricordare al suo interno
let mainContainer = document.getElementById("main-container")
mainContainer.innerHTML=numbersToRemember;

//Aquisisce il titolo dall'HTML
let firstTitle = document.getElementById('first-title');

//Richiama la funzione hideNumbers dopo 30 secondi
setTimeout(hideNumbers, 3000);

//Aggiunge la classe hide-numbers al container con i numeri da ricordare
function hideNumbers(){
    mainContainer.classList.add('hide-numbers');
    firstTitle.classList.add('hide-numbers');

    let userContainer = document.createElement("div")
    userContainer.classList.add('show-prompt')
    document.innerHTML = userContainer;
    console.log(userContainer);
    
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

    numbers.forEach(element => {
        element = prompt("Quali numeri erano presenti nella lista?: ")
        myNumbers.push(element);
        
    });
    return myNumbers
}




