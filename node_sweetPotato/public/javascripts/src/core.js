;(function() {
  "use strict";

  var client = new Faye.Client('http://localhost:8000/ws');

  client.subscribe('/bar', function(response){
    console.log('from server', response);
  });
}());
