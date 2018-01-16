let a=0;
let b="default";
let operation=0;
let clicked = 0;
let stringMath = 0;

function add(a,b){
  ad = a+b;
  round = ad.toFixed(3);
  toBig = parseFloat(round).toExponential(3);
  return(ad.toString().length > 15) ? toBig : parseFloat(round);
};

function subtract(a,b){
  sub = a-b;
  round = sub.toFixed(3);
  toBig = parseFloat(round).toExponential(3);
  return(sub.toString().length > 15) ? toBig : parseFloat(round);
};

function divide(a,b){
  if (b===0){return "Nope."};
  div = a/b;
  round = div.toFixed(3);
  toBig = parseFloat(round).toExponential(3);
  return(div.toString().length > 15) ? toBig : parseFloat(round);
};

function multiply(a,b){
  mult = a*b;
  round = mult.toFixed(3);
  toBig = parseFloat(round).toExponential(3);
  return(mult.toString().length > 15) ? toBig : parseFloat(round);
};

function operate(a,b,method){
  switch(method){
    case "add":
    document.getElementById("output").innerHTML = add(a,b);
    break;
    case "subtract":
    document.getElementById("output").innerHTML = subtract(a,b);
    break;
    case "divide":
    document.getElementById("output").innerHTML = divide(a,b);
    break;
    case "multiply":
    document.getElementById("output").innerHTML = multiply(a,b);
    break;
  };
};

buttons=document.querySelectorAll(".buttons");
for(i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click", function(e){
    if(e.target.innerHTML == "." && document.getElementById("output").innerHTML.includes(".")){return};
    if(clicked == 1){
      document.getElementById("output").innerHTML = "";
    };
    clicked = 0;
    if(document.getElementById("output").innerHTML.length < 15){
      document.getElementById("output").innerHTML += e.target.innerHTML;
    };
  });
};

operator=document.getElementsByClassName("operator");
for(i=0;i<operator.length;i++){
  operator[i].addEventListener("click", function(e){
    if(clicked == 1){return}
      else if(stringMath == 1){
        b = Number(document.getElementById("output").innerHTML)
        operate(a,b,operation);
        a = Number(document.getElementById("output").innerHTML)
        clicked = 1;
      }
      else{
        operation=e.target.id;
        a = Number(document.getElementById("output").innerHTML);
        clicked = 1;
        stringMath = 1;
      };
    });
};

document.getElementById("equals").addEventListener("click", function(){
  if(b=="default"){return};
  if(operation==0){return};
  b = Number(document.getElementById("output").innerHTML);
  operate(a,b,operation);
  clicked = 0;
  stringMath = 0;
});

document.getElementById("all-clear").addEventListener("click", function(){
  document.getElementById("output").innerHTML = "";
  a=0;
  b="default";
  stringMath=0;
  clicked=0;
  operation=0;
});

document.getElementById("delete").addEventListener("click", function(){
  backspace=document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML=backspace.slice(0,-1);
});