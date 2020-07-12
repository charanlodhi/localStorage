var url = "https://api.exchangeratesapi.io/latest?base=";

function converCurrency(){
    var base = document.getElementById("baseValue").value;
    var outPutValue = document.getElementById("outPutValue").value;
    var amount = document.getElementById("amount").value;
    var result;
    fetch(`${url}${base}`,{method:'GET'})
    .then((responce)=>responce.json())
    .then((data)=>{
        final = data.rates;
        final = final[outPutValue]*parseFloat(amount)
        var resultShow = `Converted Value of ${amount} ${base} is ${final} ${outPutValue}`
        document.getElementById('result').innerHTML= resultShow;
        console.log(document.getElementById('result').innerHTML= resultShow)
    })
}
