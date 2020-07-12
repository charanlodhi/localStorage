// function addition(){
//     var fistValue = document.getElementById("firstValue").value;
//     var secoundValue = document.getElementById("secoundValue").value;
//     var result = parseFloat(fistValue)+ parseFloat(secoundValue);
//     var finalValue = document.getElementById("result");
//     console.log( finalValue.innerText= result)
// }
// addition()


function calc(options){
    var fistValue = document.getElementById("firstValue").value;
    var secoundValue = document.getElementById("secoundValue").value;
    var result;
    if(options=='Add'){
        result = parseFloat(fistValue)+parseFloat(secoundValue);
    } else if (options=='Mul') {
        result = parseFloat(fistValue)*parseFloat(secoundValue);
    }else if(options=='Div'){
        result = parseFloat(fistValue)/parseFloat(secoundValue);
    }
   
    else {
        result = parseFloat(fistValue)-parseFloat(secoundValue);
    }
    var finalValue = document.getElementById("result");
    console.log( finalValue.innerText= result)
  }

  function clear(){
      var clearValue = document.getElementById('result').innerText;
      var fistValue = document.getElementById("firstValue").value="";
      var secoundValue = document.getElementById("secoundValue").value="";
  

  }