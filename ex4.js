function getShortMessages(messages)
{

	let temp = messages.map(function(x){return x.message;});
	let result= temp.filter(  function(text) {

		return text.length<50;
	
	}
	);



	return result;

}



module.exports = getShortMessages;



/*    TESTING
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





console.log("Should return true for correct input : " , isEqual(

	getShortMessages([{message: "Esse id amet quis eu esse aute officia ipsum."
	},
	{message: "message 2" 
	}
		,
	{
		message: "Esse id amet quis eu esse aute officia ipsum asdfghj." 
	}])
	, ["Esse id amet quis eu esse aute officia ipsum.","message 2"])

);

console.log("Should return true for correct input : " , isEqual(

	getShortMessages([])
	, [])

);
*/



