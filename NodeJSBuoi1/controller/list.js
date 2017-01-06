var PhepTinh = require('../model/pheptinh.js');
var Nguoi = require('../model/nguoi.js');
var mangNguoi = [
  new Nguoi('minh',12),
  new Nguoi('ha',11)
];

module.exports = (req,res)=>{
  var phepTinh  = new PhepTinh('Cong',1212,323);
  res.render('list',{mang:['<p>Android</p>','iOS'],  phepTinh, mangNguoi });
};
