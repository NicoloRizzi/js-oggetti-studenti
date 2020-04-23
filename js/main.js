/**
 * Descrizione:
Creare un oggetto che descriva uno studente
lo studente avrà  le seguenti proprietà: nome, cognome e età.
Stampare attraverso il for..in tutte le proprietà (chiavi e valori).
Nome della repo per consegnare l’esercizio: js-oggetti-studenti
OPZIONALE (in una cartella a parte dal codice per l’esercizio degli oggetti)
Riprodurre la piccola chat fatta insieme durante la lezione utilizzando handlerbars.
Ricordo il link alla documentazione per download/cdn e referenza sull’utilizzo base:
https://handlebarsjs.com/installation/
Buon lavoro ragazzi e benvenuti nel mondo degli oggetti JS e di handlebars! :top:
 */

$(document).ready(function () {
  var studente = {
    nome: 'nicolò',
    cognome: 'rizzi',
    età: 23
  }
  for(var key in studente) {
    console.log(studente[key]);
  }
});