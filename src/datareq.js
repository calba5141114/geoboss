function getZipo(zipcode) {
  var url = " http://api.zippopotam.us/us/" + zipcode;
  zipsData.push(url);
}

function getZipoJSON(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.responseType = 'json';
    xmlHttp.send( null );
 var response = xmlHttp.responseText;
 return response;
}
