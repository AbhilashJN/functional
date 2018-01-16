function countWords(inputWords) {
      // SOLUTION GOES HERE


      let result = inputWords.reduce(   function(accumulator , currentValue) {

      		if(currentValue in accumulator)
      		{
      			accumulator[currentValue] +=1

      		}
      		else
      		{
      			accumulator[currentValue] =1
      		}

      		
      		return accumulator
      },

      {} )
return result

}

//module.exports = countWords


console.log("Should return the correct result object" , countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'])==={Apple : 2,Banana : 1, Durian:3})