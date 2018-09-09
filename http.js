const http = require ('http');
const fs = require ('fs');
const port = 80;


const server = http.createServer(function (req,res){
	res.writeHead(200, {
		'content-type': 'text/js'
	})
	const data = fs.readFileSync('./index.html');
	res.write(data);
	res.end();
})


server.listen(port,function (){
	console.log(port + ' port is listenning');
})
