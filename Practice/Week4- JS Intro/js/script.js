var a="Hello Global";
console.log(a);
function A(){
  var a="in A";
  console.log(a);
  B();

function B(){
  console. log(a);
}
}
A();