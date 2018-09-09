const dgram = require ('dgram');

const socket = dgram.createSocket('udp4');

socket.bind(80, 'localhost',function (){
  console.log('now success bind 80 port');
})

socket.on('message',function (msg, rinfo){
  console.log(msg,rinfo);
})

