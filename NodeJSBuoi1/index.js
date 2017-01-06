var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000);
app.use('/public',express.static('public'));
app.get('/show', (req,res) => {
  res.send('<img src="ASCimage.jpg"/>');
})
app.get('/abc',require('./controller/abc.js'));
app.get('/api/:ten/:tuoi',require('./controller/api.js'));
//ddawng ky
app.get('/dangky',require('./controller/dangky.js'));
app.post('/xulydangnhap',require('./controller/xulypheptinh.js'));

app.get('/num',(req,res)=> res.send(200));
app.get('/tinh/:pheptinh/:soa/:sob',require('./controller/xuly.js'));

function cong(a,b){
  return parseInt(a) + parseInt(b);
}
