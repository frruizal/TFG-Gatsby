
const express = require('express');
const app = express();
const PORT = 3000;
const {exec} = require('child_process');

app.get('/version', function(req, res,next) {
  exec('gatsby -v;', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      res.status(500).send({
        message:
          err.message || 'Some error ocurred'
      });
    } else {
      // the *entire* stdout and stderr (buffered)
      res.send(`stdout: ${stdout} stderr: ${stderr}`);
      // res.send();
    }
  });
});

app.get('/ejecutar', function(req, res,next) {
  exec('gatsby develop -H 0.0.0.0;', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      res.status(500).send({
        message:
          err.message || 'Some error ocurred'
      });
    } else {
      // the *entire* stdout and stderr (buffered)
      res.send(`stdout: ${stdout} stderr: ${stderr}`);
      // res.send();
    }
  });

});
app.get('/compilar', function(req, res,next) {
  exec('gatsby build;', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      res.status(500).send({
        message:
          err.message || 'Some error ocurred'
      });
    } else {
      // the *entire* stdout and stderr (buffered)
      res.send(`stdout: ${stdout} stderr: ${stderr}`);
      // res.send();
    }
  });
});

app.get('/actualizar', function(req, res,next) {
  exec('kill $(lsof -t -i:8000); gatsby develop -H 0.0.0.0', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      res.status(500).send({
        message:
          err.message || 'Some error ocurred'
      });
    } else {
      // the *entire* stdout and stderr (buffered)
      res.send(`stdout: ${stdout} stderr: ${stderr}`);
      // res.send();
    }
  });
});

app.listen(PORT, function(){
  console.log('Your node js server is running on PORT:',PORT);
});
/*
//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 7777;
const express = require('express');
const app = express();
const {exec} = require('child_process');
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');

});


//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
