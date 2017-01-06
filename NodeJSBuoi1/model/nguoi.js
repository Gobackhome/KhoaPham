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
module.exports = Nguoi;
