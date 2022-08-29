function calc() {
  var a = parseInt(document.querySelector("#age").value);
  var b = parseInt(document.querySelector("#ad").value);
  var calculate;
  calculate = (a/(a+12))*b
  calculate = calculate.toFixed(2)


  document.querySelector("#result").innerHTML=calculate;

}

function dose() {
  var a = parseInt(document.querySelector("#age").value);
  var b = parseInt(document.querySelector("#ad").value);
  var c = parseInt(document.querySelector("#mg").value);
  var d = parseInt(document.querySelector("#ml").value);
  var syrup;
  syrup = c/d
  e =((a/(a+12))*b)/syrup
  e = e.toFixed(2)


  document.querySelector("#done").innerHTML=e;
}
