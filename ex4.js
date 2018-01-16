function getShortMessages(messages)
{
	
	let temp = messages.map(function(x){return x.message})
	let result= temp.filter(  function(text) { 

			return text.length>50
	 }   )


	console.log(result)
	return result

}


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



//module.exports = getShortMessages

console.log("Should return true for correct input : " , isEqual(

getShortMessages([{message: 'Esse id amet quis eu esse aute officia ipsum.' // random
},
  {message: 'message 2' // random
  }
    ,
 {
  message: 'Esse id amet quis eu esse aute officia ipsum asdfghj.' // random
    }])
 , ['Esse id amet quis eu esse aute officia ipsum asdfghj.'])

)