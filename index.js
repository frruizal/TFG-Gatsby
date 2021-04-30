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

app.listen(PORT, function(){
  console.log('Your node js server is running on PORT:',PORT);
});
