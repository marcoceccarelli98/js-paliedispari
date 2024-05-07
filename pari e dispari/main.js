'use strict';

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// INPUTS
// - definizione costante per input pari o dispari //choiceEvenOrOdds
const choiceEvenOrOdds = prompt('Scegli pari o dispari');
// - definizione costante per input numero tra 1 e 5 //myNumber
const myNumber = Number(prompt('Scegli un numero da 1 a 5'));

const maxNum = 5;
let cpuChoice = '';
let result = '';
let cpuNumber = 0;

// PROGRAM

if (checkChoice(choiceEvenOrOdds) && checkNumber(myNumber, maxNum)) {
    // - definizione costante per numero casuale tra 1 e 5 //cpuNumber
    cpuNumber = genCpuNumber(maxNum);

    // - calcolo la somma dei due valori
    const numberSum = myNumber + cpuNumber;

    // - stabilisco la scelta del computer solo per la visualizzazione
    if (choiceEvenOrOdds == 'pari') {
        cpuChoice = 'dispari';
    } else {
        cpuChoice = 'pari';
    }

    if (checkWin(numberSum, choiceEvenOrOdds)) {
        result = 'Hai vinto!';
    } else {
        result = 'Hai perso!';
    }
} else {
    result = 'La scelta è errata'
}

// OUTPUT
//ME
document.getElementById('mychoice').innerHTML = choiceEvenOrOdds;
document.getElementById('mynumber').innerHTML = myNumber;

//CPU
document.getElementById('cpuchoice').innerHTML = cpuChoice;
document.getElementById('cpunumber').innerHTML = cpuNumber;

// - visualizzo il vincitore
document.getElementById('result').innerHTML = result;


//-----------
// FUNCTIONS
//-----------

function checkChoice(choice) {
    if (choice === 'pari' || choice === 'dispari') {
        return true;
    } else {
        return false;
    }
}

function checkNumber(userNum, maxNumber) {
    if (userNum < 1 || userNum > maxNumber) {
        return false;
    } else {
        return true;
    }
}

//Generate CPU Random Number
function genCpuNumber(maxNumber) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    return randomNumber;
}

//Check Winner
function checkWin(sum, choice) {
    // - stabilisco il vincitore
    if ((choice == 'pari' && sum % 2 === 0) || (choice == 'dispari' && sum % 2 === 1)) {
        return true;
    } else {
        return false;
    }
}
