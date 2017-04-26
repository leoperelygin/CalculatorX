document.onkeypress = handle;
document.onkeyup = handle2;

function setInputText(val){
  document.getElementById("display").value = val;
}
function math(val){
  document.getElementById("display").value += val;
}
function calc(){
  if (document.getElementById("display").value.length == 0)
    return;

  if ((document.getElementById("display").value == "Error")) {
      setInputText("");
      return;
  }

  try {
    setInputText(eval(document.getElementById("display").value));
  } catch (e) {
    setInputText("Error");
  }
}
function handle2(e){
  if (e.which == 46)
    setInputText("");
  if (e.which == 13)
    calc();
  if (e.which == 8) {
    backspace();
  }
}

function handle(e){

  if(e.charCode >= 48 && e.charCode <= 57)
    math(e.charCode - 48);
  if (e.charCode == 40)
    math("(");
  if (e.charCode == 41)
    math(")");
  if (e.charCode == 42)
    math("*");
  if (e.charCode == 43)
    math("+");
  if (e.charCode == 45)
    math("-");
  if ((e.charCode == 44)||(e.charCode == 46))
    math(".");
  if (e.charCode == 47)
    math("/");
}

function backspace(){
  var length = document.getElementById("display").value.length;
  document.getElementById("display").value = document.getElementById("display").value.substr(0, length-1);
}
