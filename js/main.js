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


// FUNZIONE B - Generazione di un numero casuale da 1 a 100
function randomNumber() {

    let element = Math.floor(Math.random() * 100) + 1;
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

/* Creo una variabile di tipo Array vuota che verrà riempita con i 
valori dei numeri random creati dalla cpu (che rappresentano le bombe)*/
let cpuNumbers = [];

// Creo una variabile che richiama il contenitore delle celle
const cellContainer = document.querySelector(".cell_container");

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
    
    for (let i = 1; i <= 100; i++) {
        let cellBox = createMyElement('div', 'cell_box');
        cellBox.innerText = [i];
        cellContainer.append(cellBox);
        cellBox.addEventListener('click', function() {
            console.log('numero cliccato: ', i);
            if (cpuNumbers.includes(i)) {      // controllo se numero cliccato è nell'array
                addClass(cellBox, 'bomb_cell');   // Utilizzo la FUNZIONE D per aggiungere la classe css
                alert('hai perso, clicca nuovamente sul tasto PLAY');

            } else {
                addClass(cellBox, 'correct_cell');  // Utilizzo la FUNZIONE D per aggiungere la classe css
                // contatore numero da inserire;
            }
        })   
    }

    let createdNum = 0;
    let i = 0;
    while (i < 16) {
        createdNum = randomNumber();
        cpuNumbers.push(createdNum);
        console.log(createdNum);
        i++
    }
      
})












