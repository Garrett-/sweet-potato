;(function() {
  "use strict";

  var client = new Faye.Client('http://localhost:8000/ws');

  client.subscribe('/chatroom/messages', function(response){
    var $TA = $('.messages'), $input = $('.input');
    var messages = response.messages.join("\n");

    $TA.val('');
    $input.val('');
    $TA.val(messages);

    console.log('from /chatroom/messages', response);
  }).then(function(){
    console.log('Successfully subscribed to /chatroom/messages');
  }, function(){
    console.error('Failed to subscribe to /chatroom/messages');
  });

  $(function(){

    $.ajax({
      url: '/message',
      type: 'GET'
    }).then(function(messages){
      console.log('Got messages', messages);
      $('.messages').val(messages.join("\n"));
    }, function(){
      console.error('Attempting to get messages failed');
    });

    $('form#form').on('submit', function(event){
      event.preventDefault();

      var formData = $('form').serializeArray();

      $.ajax({
        url: '/message',
        type: 'POST',
        data: formData
      }).then(function(response){
        console.log('message sent');
      }, function(){
        console.error('message failed');
      });

      return false;
    });

  });


}());
