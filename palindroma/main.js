'use strict';

//Get word from user
const userWord = prompt('Inserisci una parola');

if (palindromeCheck(userWord)) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}

function palindromeCheck(word) {
    //Bool declaration for function output
    let palindromeWord = false;

    //Split string in an array of char
    const splitWord = word.split("");
    //Reverse char array
    const reverseChar = splitWord.reverse();
    //Join char array to form a string
    const reverseWord = reverseChar.join("");

    //Check if the initial word is the same as the reverse word
    if (word === reverseWord) {
        palindromeWord = true;
    }

    return palindromeWord;
}

