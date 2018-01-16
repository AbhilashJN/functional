function doubleAll(numbers) {

    let result = []
   
    result = numbers.map( function (x){ return 2*x})

    return result

    }




module.exports = doubleAll


/*
function isEqual(first,second)
{
	for(let i=0;i<first.length;i++)
	{
		if(first[i]!=second[i])
		{
			return false
		}
	}
	return true
}

console.log("should return true for proper input : " , isEqual(doubleAll([1,2,3,4]) , [2,4,6,8])===true   )
*/
