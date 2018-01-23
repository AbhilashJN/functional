function doubleAll(numbers) {

	let result = [];
   
	result = numbers.map( function (x){ return 2*x;});

	return result;

}




module.exports = doubleAll;


/* TESTING


function isEqual(first,second)
{
	for(let i=0;i<first.length;i++)
	{
		if(first[i]!=second[i])
		{
			return false;
		}
	}
	return true;
}

console.log("should return array containing double of each element for valid input : " , isEqual(doubleAll([1,2,3,4]) , [2,4,6,8])===true   );
console.log("should return empty array for empty array input : " , isEqual(doubleAll([]) , [])===true   );

*/



