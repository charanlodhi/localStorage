var result = document.getElementById('result');
function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        }
        else{
            result.innerText="Geo Location not enabled"
        }
}

function showPosition(position){
    result.innerText =`Latitude: ${position.coords.latitude} \ lungitude ${position.coords.longitude}`
}
