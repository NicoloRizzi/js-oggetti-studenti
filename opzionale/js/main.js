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

}); // END DOC READY