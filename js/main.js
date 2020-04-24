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
    console.log(key);
    console.log(studente[key]);
    console.log( key + ": " + studente [key] );
  }
});


// esercizio 2

var students = [
  {
    name: 'Fabio',
    surname: 'Gadau'
  },
  {
    name: 'Paolo',
    surname: 'Duzioni'
  },
  {
    name: 'Marco',
    surname: 'Silvestri'
  },
  {
    name: 'Luigi',
    surname: 'Smilzo'
  },
]

for (var i = 0; i < students.length; i++) {
  var student = students[i]
  //console.log(student);

  // output
  console.log('Student', student.name, student.surname);
  
  
}

// esercizio 3

var newName = prompt('Inserisci il nome');
var newSurname = prompt('Inserisci cognome');
/* seconda modalità
var newObj = {
  name: newName,
  surname: newSurname
};

students.push(newObj); */

students.push( {
  name: newName,
  surname: newSurname
});

console.log(students);

