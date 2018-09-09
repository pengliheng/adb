const net = require ('net');
const port = 80;
const client = net.Socket();

client.connect(port,'localhost', function (socket){
  console.log('net conntect');

  client.write('message from client')

})

client.on('data',function (data){
  console.log(`the data is from `, data.toString());
})
client.on('end',function (data){
  console.log(`data end `);
})