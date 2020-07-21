const url = "http://localhost:3080";

const getCity = () => {
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((out) => {
        for(i=0;i<out.length;i++){
            console.log(out[i].cityName)
            var node = document.createElement('option');
            var textnode = document.createTextNode(out[i].cityName)
            node.appendChild(textnode)
            document.getElementById('city').appendChild(node)
        }
        
    })
   
}



function onchangeState (){
    var state = document.getElementById('city').value;
    document.getElementById('outputData').innerText = `You are select City: ${state}`;
    console.log(state)
    
}






