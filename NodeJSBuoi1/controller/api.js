module.exports = function(req,res){
  var name = req.params.ten;
  var tuoi = req.params.tuoi;
  res.send(`Xin chao ban  ${name} ${tuoi}`);
};
