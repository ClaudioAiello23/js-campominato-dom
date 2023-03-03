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


// // FUNZIONE B - PROVA CREAZIONE FUNZIONE AGGIUNGI CLASSE - DA VERIFICARE
// // Funzione per aggiungere una classe
// function addClassHtml(oldClass, newClass) {
//     const element = document.querySelector(oldClass).classList.add(newClass);
//     return element;
// }


/* 
*************************
ALTRE ISTRUZIONI
************************* 
*/


// Creo una variabile che richiama il contenitore delle celle
const cellContainer = document.querySelector(".cell_container");

/* Creo una nuova variabile cellBox che riguarda l'elemento creato, 
cui associo la "funzione A" (vedi FUNZIONI) per creare un div che
richiama la classe della cella; appendo la nuova variabile al 
cellContainer; il tutto lo inserisco in un ciclo FOR per replicare
100 volte l'operazione e creare la griglia di partenza; in più chiedo
di stampare a console il numero della cella quando la clicco*/
for (let i = 1; i <= 100; i++) {
    let cellBox = createMyElement('div', 'cell_box');
    cellBox.innerText = [i];
    cellContainer.append(cellBox);
    cellBox.addEventListener('click', function() {
       console.log(i);
}

)
     
}


// Creo una variabile che richiama il contenitore del bottone
const buttonContainer = document.querySelector(".btn_box");


/* Creo una variabile e aggancio "la funzioen A" per creare il tasto
bottone e aggiungere la relativa classe; aggiungo la scritta PLAY 
all'elemento e lo appendo al contenitore button box.*/
const playButton = createMyElement('button', 'play_button');
playButton.innerText = 'PLAY';
buttonContainer.append(playButton);


/* Creo una variabile showContainer che si aggancia alla classe
main_container che contiene l'intera griglia; la griglia è nascosta
di default al caricamento del sito e si attiva con il click
sul tasto PLAY; viene aggiunta la classe "show_main_container"*/
let showContainer = document.querySelector('.main_container');
playButton.addEventListener('click',
    
    function() {
        showContainer.classList.add('show_main_container');
      
}

)



