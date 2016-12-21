var i = 1;
function tinhtong(i){
  if(i==0){
    return 0
  }
  return i + tinhtong(--i);
}
console.log(tinhtong(4))

function tru (i){
  return i - -1;
}
console.log(tru(3));
