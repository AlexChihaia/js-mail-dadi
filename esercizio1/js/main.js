'use strict';

/* 1) Chiedi all’utente la sua e-mail,
- Creare un promt nel quale richiedere la mail all'utente */

const promptMail = prompt('Inserisci qui la tua e-mail');
console.log(promptMail);

/* 2) controlla che sia nella lista di chi può accedere, */
/* - creare un array con una lista di mail ammesse. */
const mailArray = ['alexchihaia84@gmail.com', 'pippo.pluto@topolino.com', 'indice.array@javascript.com']


let canAccess = false;

/* - creare una condizione per la quale solo le mail all'interno dell'array possano accedere */
for (let counter = 0; counter < mailArray.length; counter++) {
    if (mailArray[counter] === promptMail) {
        canAccess = true;
    }
}
if (canAccess === true) {
    console.log('E-mail valida. Accesso consentito.');
}
else {
    console.log('E-mail non valida. Accesso negato.');
}



/* 3) stampa un messaggio appropriato sull’esito del controllo. */
/* - creare un console.log per i due casi sopra indicati */