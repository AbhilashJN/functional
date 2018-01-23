function upperCaser(text)
{
	let result  = text.toUpperCase();
	return result;	 
}

//console.log("Should return correct upper case output : " , upperCaser("lorem ipsum")==="LOREM IPSUM")
//console.log("Should return correct upper case output : " , upperCaser("LOREM IPSUM")==="LOREM IPSUM")
//console.log("Should return correct upper case output : " , upperCaser("lOrEM iPsuM")==="LOREM IPSUM")
//console.log("should return empty string : " , upperCaser("")==="");

module.exports = upperCaser;
