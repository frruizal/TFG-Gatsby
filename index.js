/*router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/gatsby', function (req, res, next) {
    res.render('index', {title: 'Julen'});

    exec('cd ~/Escritorio/incremental/sitio_incremental;  gatsby build;', (err, stdout, stderr) => {
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

module.exports = router;
*/

const express = require('express');
const app = express();
const PORT = 3000;

const {exec} = require('child_process');


app.get('/hola', function(req, res) {
  res.json({"Francisco-puto amo": "express with drupal"});
});

app.get('/version', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
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

app.get('/empezar', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
  exec('gatsby develop;', (err, stdout, stderr) => {
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
app.get('/start', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
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
app.get('/start1', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
  exec('npm run start;', (err, stdout, stderr) => {
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
app.get('/start2', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
  exec('npm run develop;', (err, stdout, stderr) => {
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

app.get('/serve', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
  exec('gatsby serve;', (err, stdout, stderr) => {
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
  //res.render('index', {title: 'Fran'});
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

app.get('/compilar2', function(req, res,next) {
  //res.render('index', {title: 'Fran'});
  exec('npm run build;', (err, stdout, stderr) => {
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
  console.log('Your node js serveDr is running on PORT:',PORT);
});

/*var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});


module.exports = router;
*/
