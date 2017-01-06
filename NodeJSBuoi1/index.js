var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000);
app.use('/public',express.static('public'));
app.get('/show', (req,res) => {
  res.send('<img src="ASCimage.jpg"/>');
})
app.get('/abc',indexFunc);
app.get('/api/:ten/:tuoi',function(req,res){
  var name = req.params.ten;
  var tuoi = req.params.tuoi;
  res.send(`Xin chao ban  ${name} ${tuoi}`);
})

function indexFunc(req,res){
  res.send("<h1>Hello.<h1>");
}

//ddawng ky
app.get('/dangky',(req,res)=>{
  res.send(
    `<form action="/xulydangnhap" method="post">
      <input type="text" name="username"/>
      <input type="password" name="password"/>
      <input type="submit" value="dang nhap"/>
    </form>`
  )
});
app.post('/xulydangnhap',(req,res)=>{
  var {username,password} = req.body;
  res.send(`
    <h1> ban dang nhap voi ${username} va password ${password}</h1>
  `);
});

app.get('/num',(req,res)=> res.send(200));
app.get('/tinh/:pheptinh/:soa/:sob',xuly);
function xuly(req,res){
  //TO DO
  var {pheptinh,soa,sob} = req.params;
  var phepTinh = new PhepTinh(pheptinh,soa,sob);

  res.send(`${soa} ${pheptinh} ${sob} la: ${phepTinh.ketqua()} `);
}

class PhepTinh{
  constructor(pheptinh,soa,sob){
    this.pheptinh = pheptinh;
    this.soa = soa;
    this.sob = sob;
  }
  ketqua(){
    var {pheptinh,soa,sob} = this;
    var dau = ' % ';
    switch (pheptinh) {
      case 'cong':
        dau = ' + ';
        break;
      case 'tru':
          dau = ' - ';
        break;
      case 'nhan':
          dau = ' * ';

    }
    var strPhepTinh = soa + dau + sob;
    var kq = eval(strPhepTinh);
    return kq;
  }
}
function cong(a,b){
  return parseInt(a) + parseInt(b);
}
