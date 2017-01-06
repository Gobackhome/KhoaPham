var PT = require('../model/pheptinh.js');
module.exports = (req,res){
  //TO DO
  var {pheptinh,soa,sob} = req.params;
  var phepTinh = new PT(pheptinh,soa,sob);

  res.send(`${soa} ${pheptinh} ${sob} la: ${phepTinh.ketqua()} `);
};
