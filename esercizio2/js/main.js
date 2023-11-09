'use strict';

/* 1) Generare un numero random da 1 a 6, sia per il giocatore che per il computer.*/
/* - usare math.floor e math.random per generare un numero casuale da 1 a 6. */

const playerScore = Math.floor(Math.random() * 6) + 1;
const computerScore = Math.floor(Math.random() * 6) + 1;

console.log('Punteggio giocatore: ' + playerScore);
console.log('Punteggio computer: ' + computerScore);


/* 2) Stabilire il vincitore, in base a chi fa il punteggio più alto. */
/* - creare una condizione che metta a confronto i due numeri generati */
/* - creare i console.log all'interno della condizione che verranno stampati in base all'esito */

if (playerScore > computerScore) {
    console.log('Hai vinto!')
} else if (playerScore < computerScore) {
    console.log('Hai perso.')
} else {
    console.log('Pareggio.')
}