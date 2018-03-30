function getZipo(zipcode) {
  var url = " http://api.zippopotam.us/us/" + zipcode;
  zipsData.push(url);
}

function getZipoJSON(url) {
    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    
          console.log( xhttp.responseText);
          var response = xhttp.responseText;
          return response;
        }
    };
    xhttp.open("GET", url , true);
    xhttp.send();
 
 
}

