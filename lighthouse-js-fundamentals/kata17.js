const urlDecode = function(text) {
  let output = {};
  text = text.replace(/&/g, '=').replace(/%20/g, ' ');
  const textArr = text.split('=');
  for (let i = 0; i < textArr.length; i+= 2) {
      output[textArr[i]] = textArr[i + 1];
  }
  return output;
};

console.log(urlDecode("duck=rubber")); //{duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); //{bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); //{city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); //"lots of rain"




