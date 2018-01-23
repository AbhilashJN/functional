function countWords(inputWords) {
	
	let result = inputWords.reduce(   function(accumulator , currentValue) {

		if(currentValue in accumulator)
		{
			accumulator[currentValue] +=1;

		}
		else
		{
			accumulator[currentValue] =1;
		}
			
		return accumulator;
	},

	{} );

	
	return result;

}

//module.exports = countWords;


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






console.log("Should return the correct result object" , isEqual(countWords(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]),{Apple : 2,Banana : 1, Durian:3}));
console.log("Should return the correct result object" , isEqual(countWords(["Apple", "Apple", "Apple"]),{Apple : 3}));
console.log("Should return the correct result object" , isEqual(countWords(["Apple", "Banana", "Durian"]),{Apple : 1,Banana:1,Durian:1}));
console.log("Should return empty object" , isEqual(countWords([]),{}));

