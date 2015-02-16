var http = require('http'),
    faye = require('faye');

var server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/ws', timeout: 45}),
    clients = [];

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<center><h1>non-Bayeux request, failed</h1></center>');
});

console.log('attaching bayeux to server');
bayeux.attach(server);

console.log('Listening on port :8000');
server.listen(8000);

console.log(':8000/ws');

bayeux.on('handshake', function(clientId){
  clients.push(clientId);
});

bayeux.on('disconnect', function(clientId){
  var i = clients.indexOf(clientId);

  clients = clients.filter(function(c){
    return c !== i;
  });

});

module.exports = bayeux;
