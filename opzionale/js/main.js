/**
 * Esercizio di oggi: Array e oggetti (chat con Handlebars)
Descrizione:
Estendere la chat fatta con handlebars inserendo i messaggi iniziali, visibili al caricamento della pagina, generati da un array di oggetti.
Gli oggetti conterranno proprietà come testo e orario
Usiamo Handlebars per la generazione anche di questi messaggi, come avete fatto ieri per i messaggi inseriti dall’utente
Pushate sempre nella repo dell’esercizio di ieri.
 */
$(document).ready(function () {

  // ref
  var input = $('.message-input');
  var button = $('.message-btn');
  var chat = $('.chat');


  // init handlebars
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  //inserimento nuovo messaggio
  button.click(function () {
    var message = input.val().trim();
    console.log(message);

    //dati dinamici per template handlebars
    var data = {
      text: message,
      time: '18:41',
      userClass: 'message-sent'
    }

    var html = template(data)
    chat.append(html);
    input.val('');

    setTimeout(function(){
      var data = {
        text: 'OK',
        time: '18:42',
        userClass: 'message-recived'
      }
      var html = template(data);
      chat.append(html)
    },1000);
  });

  // esercizio OGGI
  setTimeout(function(){
    var messageTemp = [
      {
        text: 'Hello word',
        time: '15:15'
      },

      {
        text: 'Hey bro',
        time: '15:16'
      },

      {
        text: 'Lorem',
        time: '15:17'
      },
    ] // end array obj
    for(var i = 0; i < messageTemp.length; i++) {
      console.log(messageTemp[i]);
      
    }
    

  })
}); // END DOC READY