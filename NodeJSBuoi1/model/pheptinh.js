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
};
module.exports = PhepTinh;
