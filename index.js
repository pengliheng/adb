const net = require ('net');
const port = 80;

const server = net.createServer(function (socket){
  console.log('net conntect');

  // 设置最大连接数
  server.maxConnections = 2;
  server.getConnections(function (err,count){
    console.log(`howmuch ${count}`);

    // 获取地址信息
    var address = server.address();
    var message = `client, the server address is ${JSON.stringify(address)}`

    socket.write(message, function (){
      var writeSize = socket.bytesWritten;
      console.log(message+ 'has send');
    })

    server.on('data',function (data){
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
      console.log(data);
    })
    
  })
})

server.listen(port, function (){
  console.log('server is listen',port)
})

