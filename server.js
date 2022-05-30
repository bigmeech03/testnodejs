var app = require('express')();
var bodyParser = require('body-parser');
const fs = require("fs")

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.post('/data', function (req, res) {
  console.log(req.body);
  res.end();
  fs.writeFile('./log.txt', req.body.char, { flag : 'a+' }, err => {
      if(err){
          console.log(err);
      }
  })
});

app.listen(3000);