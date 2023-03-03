'use strict';

/* 
*************************
FUNZIONI
************************* 
*/

// FUNZIONE A
// Funzione per creare un elemento HTML e agganciarci una classe css
function createMyElement(htmlElement, className) {
    const element = document.createElement(htmlElement);  
    element.classList.add(className);
    
    return element; 
    /* Mi creo questa funzione per creare l'elemento
     <div class="cell_box"></div> */
}


// FUNZIONE B
// Generazione di un numero casuale da 1 a 100
function randomNumber() {

    let element = Math.floor(Math.random() * 100) + 1;
    return element;
    
}

// FUNZIONE C - PROVA DA VERIFICARE
// Controllare se un numero è già incluso o meno in un array
function isIncluded(arrayNumbers) {
    const element = [cosametto]
    if(element.indexOf(arrayNumbers) > -1) {
        return true;
    } 
        return false;
    
}


//  FUNZIONE D - DA VERIFICARE
// Funzione per aggiungere una classe
function addClassHtml(oldClass, newClass) {
    const element = document.querySelector(oldClass).classList.add(newClass);
    return element;
}


/* 
*************************
ALTRE ISTRUZIONI
************************* 
*/

/* Creo un array di cpuNumbers vuoto e lo popolo con 16 numeri casuali
grazie ad un ciclo while.*/
let cpuNumbers = [];
let createdNum = 0;
let i = 0;
while (i < 16) {
    createdNum = randomNumber();
    cpuNumbers.push(createdNum);
    console.log(createdNum);
    i++
}



// Creo una variabile che richiama il contenitore delle celle
const cellContainer = document.querySelector(".cell_container");

// Creo una variabile che richiama il contenitore del bottone
const buttonContainer = document.querySelector(".btn_box");

/* Creo una variabile e aggancio "la funzione A" per creare il tasto
bottone e aggiungere la relativa classe; aggiungo la scritta PLAY 
all'elemento e lo appendo al contenitore button box.*/
const playButton = createMyElement('button', 'play_button');
playButton.innerText = 'PLAY';
buttonContainer.append(playButton);


/* Creo una variabile showContainer che si aggancia alla classe
main_container che contiene l'intera griglia; la griglia è nascosta
di default al caricamento del sito e si attiva con il click
sul tasto PLAY; viene aggiunta la classe "show_main_container".
All'evento del click inserisco il ciclo FOR per la creazione delle
100 celle, e successivamente viene mostrato il contenitore delle celle*/
let showContainer = document.querySelector('.main_container');
playButton.addEventListener('click',
    
    function() {
        
    for (let i = 1; i <= 100; i++) {
    let cellBox = createMyElement('div', 'cell_box');
    cellBox.innerText = [i];
    cellContainer.append(cellBox);
    cellBox.addEventListener('click', function() {
       console.log(i); 

}

)
     
}

    showContainer.classList.add('show_main_container');
      
}

)













