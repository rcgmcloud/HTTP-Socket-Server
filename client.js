var net = require('net');
var host = null;
var port = null;
var path = null;
var regex = /(\w+(?=:)):(\d+)(\/+\w+.\w+)/g;

var argvRegex = regex.exec(process.argv[2]);
host = argvRegex[1];
port = argvRegex[2];
path = argvRegex[3];

var client = net.connect({port: port, host: host}, function() {
  //'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');


});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('disconnected from server');
});