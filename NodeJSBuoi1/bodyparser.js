var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');
app.set('views','./views');
app.get('/tinh',(req,res)=>{
  res.render('home',{
    name: "MinhT"
  });
});

app.post('/xulypheptinh',(req,res)=>
{
  var {pheptinh, soa, sob }=req.body;
  var phepTinh = new PhepTinh(pheptinh,soa, sob);
  console.log(phepTinh.ketqua());
  res.send(`${soa} ${pheptinh} ${sob} = ${phepTinh.ketqua()}`);
});

app.get('/list',(req,res)=>{
  var phepTinh  = new PhepTinh('Cong',1212,323);
  var mangNguoi = [
    new Nguoi('minh',12),
    new Nguoi('ha',11)
  ];
  res.render('list',{mang:['<p>Android</p>','iOS'],  phepTinh, mangNguoi });
});
app.listen(3000,()=>console.log("Server started on port 3000."));

class Nguoi{
  constructor(ten,tuoi){
    this.ten = ten;
    this.tuoi = tuoi;
  }
  getGioiThieu(){
    var {ten,tuoi}= this;
    return `Ten toi la ${ten} va ${tuoi} tuoi.`
  }
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
