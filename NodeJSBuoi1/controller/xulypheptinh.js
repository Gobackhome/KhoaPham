module.exports = (req,res)=>
{
  var {pheptinh, soa, sob }=req.body;
  var phepTinh = new PhepTinh(pheptinh,soa, sob);
  console.log(phepTinh.ketqua());
  res.send(`${soa} ${pheptinh} ${sob} = ${phepTinh.ketqua()}`);
}
