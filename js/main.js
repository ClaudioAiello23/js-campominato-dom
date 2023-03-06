'use strict';

/* 
*************************
FUNZIONI
************************* 
*/

// FUNZIONE A - creare un elemento HTML e agganciarci una classe css
function createMyElement(htmlElement, className) {
    const element = document.createElement(htmlElement);  
    element.classList.add(className);
    return element; /* Mi creo questa funzione per creare l'elemento <div class="cell_box"></div> */
}


// FUNZIONE B - Generazione di un numero casuale 100/81/49
function randomNumber(numChoice) {

    let element = Math.floor(Math.random() * numChoice) + 1;
    return element;  
}


// FUNZIONE C - Resettare/svuotare un elemento html
function emptyHtml(htmlElement) {
    htmlElement.innerHTML = '';
}


// FUNZIONE D - Aggiungere una classe da html
function addClass(element, newClass) {
    element.classList.add(newClass);
}


/* 
*************************
ALTRE ISTRUZIONI
************************* 
*/

/* Creazione variabile Selected per prendere i valori delle opzioni 
della select Facile, Medio, Difficile*/
const selected = document.querySelector('.selected');


/* Impostata lunghezza cella di default = 100 e create le casistiche
con le condizioni Switch*/
let cellLength = 100;
   
  switch (true) {
    case selected.value == 2:
    cellLength = 81;
       break;
    case selected.value == 3:
    cellLength = 49;
       break;
   
    default:
    cellLength = 100;
   
  }


/* Creo una variabile di tipo Array vuota che verrà riempita con i 
valori dei numeri random creati dalla cpu (che rappresentano le bombe)*/
let cpuNumbers = [];

// Creo una variabile che richiama il contenitore delle celle
let cellContainer = document.querySelector(".cell_container");

// Creo una variabile che richiama il contenitore del bottone
const buttonContainer = document.querySelector(".btn_box");

/* Creo una variabile per il bottone PLAY e aggancio "la FUNZIONE A" 
per creare il tasto bottone e aggiungere la relativa classe; 
aggiungo la scritta PLAY  all'elemento e lo appendo al contenitore button box.*/
const playButton = createMyElement('button', 'play_button');
playButton.innerText = 'PLAY';
buttonContainer.append(playButton);


/* All'evento del click sul bottone play viene mostrato il container contenente 
la grigia e avvio il ciclo FOR per la creazione delle 100 celle, del numero della 
cella, e l'impostazione sul click sulla cella che fa partire il gioco; in caso di 
presenza del numero scelto nell'array contenente le bombe, il giocatore perderà; */
let showContainer = document.querySelector('.main_container');
playButton.addEventListener('click', function() { 

    emptyHtml(cellContainer);  //svuota il contenitore celle (FUNZIONE C); le celle vengono appese col ciclo For di volta in volta
    
    for (let i = 1; i <= cellLength; i++) {
        
        let cellBox = createMyElement('div', 'cell_box');
        switch (true) {
            case selected.value == 2:
             cellLength = 81;
             cellBox.classList.add('medium');
                break;
           case selected.value == 3:
             cellLength = 49;
             cellBox.classList.add('hard');
                break;
            
            default:
             cellLength = 100;
             cellBox.classList.add('easy');
            
        }

        cellBox.innerText = [i];
        cellContainer.append(cellBox);
        cellBox.addEventListener('click', function() {
        console.log('numero cliccato: ', i);
        if (cpuNumbers.includes(i)) {      // controllo se numero cliccato è nell'array
                addClass(cellBox, 'bomb_cell');   // Utilizzo la FUNZIONE D per aggiungere la classe css
                alert('hai perso, per rigiocare aggiorna il sito e premi nuovamente sul tasto PLAY');

            } else {
                addClass(cellBox, 'correct_cell');  // Utilizzo la FUNZIONE D per aggiungere la classe css
                // contatore numero da inserire;
        }
        })   
    }


    
/* Creazione 16 numeri casuali (le "bombe") con condizione Switch che 
regola la creazione dei numeri casuali nella cella considerando 16 
numeri compresi tra 1 e 100, oppure 16 numeri compresi tra 1 e 81, 
oppure 16 numeri compresi tra 1 e 49 (in base alla scelta utente).
Utilizzata la Funzione B per la creazione dei numeri casuali*/
let createdNum = 0;
let i = 0;

    while (i < 16) {
        switch (true) {
            case cellLength === 81:
            createdNum = randomNumber(81);
             console.log(createdNum);
                break;

            case cellLength === 49:
            createdNum = randomNumber(49);
            console.log(createdNum);
                break;

            default:
            createdNum = randomNumber(100);
            console.log(createdNum);   
        }

        cpuNumbers.push(createdNum);
        i++
    }
      
})
