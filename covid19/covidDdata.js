var url = "https://api.covidindiatracker.com/state_data.json";
const covidData = () =>{
    fetch(url,{method:'GET'})
    .then((data) => data.json())
    .then((output) =>{
        for(i=0;i<output.length;i++){
            // console.log(`State ${output[i].state} Active case ${output[i].active}`)

        var table =`<tr><td>${output[i].state}</td><td>${output[i].active}</td><td>${output[i].confirmed}</td><td>${output[i].recovered}</td><td>${output[i].deaths}</td></tr>`;

        document.getElementById("showData").innerHTML = table;
            console.log(output[i]) 
            
        }
        error: (output) => {
            console.log(output[i]);
          } 
    })
}

covidData();