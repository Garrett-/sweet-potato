;(function() {
  "use strict";

  var client = new Faye.Client('http://localhost:8000/ws');

  $(init);

  client.subscribe('/chatroom', function(response){
    console.log('from server', response);
  });

  function init() {
    var TA = $('#chat');

    $('#form').on('submit', function(e){
      e.preventDefault()
      var msgObject = {
        message: TA.val()
      };

      console.log('sending to server', msgObject);

      client.publish('/chatroom', msgObject);

      TA.val('');

      return false;
    });

  }


}());
