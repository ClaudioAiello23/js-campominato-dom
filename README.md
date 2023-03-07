Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

---------------------------------------------------------------
SVOLGIMENTO - IPOTESI

- impostare la difficoltà FACILE, MEDIO, DIFFICILE con uno switch che richiama il "value" presente nelle opzioni della select (selezione livello a tendina); in caso si scelga l'opzione DIFFICILE, ad esempio, al momento del click sul tasto PLAY verrà creata una griglia da 49 caselle; la divisione delle celle viene impostata sul file CSS.
- impostare una funzione per la generazione dei numeri casuali; impostato un argomento
da utilizzare per inserire il numero di celle; in base al numero di celle (100, 81, 49)
aggiunto un vicolo per le bombe (ad es. vengono create sempre 16 bombe, ma se le celle sono 49 il numero della bomba deve essere compreso tra 1 e 49).
- impostatr il click sulla cella cellBox; impostare un array che contiene le bombe create casualmente; impostare la condizione che se si clicca su una cella che corrisponde ad un numero presente nell'array delle bombe, la cella si colora di rosso e la partita termina; in caso contrario la partita continua.
- impostare punteggio contatore in base al numero di celle cliccate prima di trovare una cella bomba.