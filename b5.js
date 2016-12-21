var mangMonHoc = ['Android', 'iOS','NodeJS','PHP','C#'];
//
// mangMonHoc.forEach(function(id,item){
//   console.log(item);
// });
//
// mangMonHoc.pop();
// mangMonHoc.forEach(function(id,item){
//   console.log(id);
// });
//
// mangMonHoc.shift();
// mangMonHoc.forEach(function(id,item){
//   console.log(id);
// });
//
// mangMonHoc.unshift('php');
// mangMonHoc.forEach(function(id,item){
//   console.log(id);
// });
//
// mangMonHoc.slice(1,2);
// mangMonHoc.forEach(function(item,idx){
//   console.log(item);
// });// Android,PHP,C#
// // bang
// mangMonHoc.forEach((item,idx)=> console.log(item))
//

var mangSo = [1,5,8,10];
var mangTem  = [...mangSo]
var mangNhan = mangSo.map(function(e){return e*2;});
// var mangNhan = mangSo.map((e) =>  e*2); //Arrow Function

console.log(mangNhan);
console.log(mangTem);
