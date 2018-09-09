const http = require ('http');
const fs = require ('fs');
const url = require ('url');
const path = require ('path');
const mime = require ('./mime');
const port = 80;

const server = http.createServer(function (req,res){
  let filePath = `.${req.url}`;

  fs.stat(filePath, function (err, stats) {    
    if (err) {
      return console.error(err);
    }
    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
    if(stats.isFile()){
      fs.exists(filePath,function (isExist){
        if(isExist){
          console.log("读取文件信息成功！");
          const type = path.parse(filePath).ext;
          const contentType = mime[type];
          const data = fs.readFileSync(filePath)
          res.writeHead(200,{
            'content-type': contentType + ';charset=utf-8'
          })
          res.write(data);
          res.end();
        }else{
          res.end('404 not found');
        }
      })
    } else {
      fs.readdir(filePath, function(err, files){
        if (err) {
            return console.error(err);
        }
        let html = '';

        files.forEach( function (file){
          html += `
          <h3>
            <a href="${filePath}/${file}">${file}</a>
          </h3>
          `;
        });
        res.writeHead(200,{
          'content-type': 'text/html; charset=utf-8'
        })
        res.write(html);
        res.end();
     });
     

    }
  });

})

server.listen(port,function (){
	console.log(`${port} is listenning`)
})