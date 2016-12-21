function addWithTen(a){
  return function(){
    return a + 10;
  }
}
console.log(addWithTen(2)());
function c(dieukien,func1,func2){
  dieukien? func1(): func2();
}
function a(){
  console.log("f1");
}

function b(){
  console.log("f2");
}

c(null,a,b);
