sub.onclick = () => {
  zips.push(zip.value);
  zip.value = "";
  getZipo(zips[0]);
zipper.push(getZipoJSON(zipsData[0])) ;
var response =  zipper[0];
console.log(response['places']);
};
