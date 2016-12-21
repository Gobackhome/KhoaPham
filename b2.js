//bai tap so xo
var kq = 832;
var soLanLap = 0;
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var flat = false;
// for (var soLanLap = 0;soLanLap < 10000; soLanLap++) {
//   var res = getRandomArbitrary(0, 999);
//   if(kq === res){
//     flat = true;
//     break;
//   }
// }
for (;;) {
  var res = getRandomArbitrary(0, 999);
  if(kq === res){
    flat = true;
    break;
  }
}


if (flat) {
  console.log(soLanLap);
  console.log("Chuc mung ban da trung!");
}else{
  console.log(soLanLap);
  console.log("Ban thu lan sau!");
}
