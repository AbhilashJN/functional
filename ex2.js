let i=0;

function repeat(operation , num)
{
	i=num;
	if(num>0)
	{
		repeat(operation, num-1);
		i=i-1;
	}
	else if(num===0)
	{
		return;
	}

}


module.exports = repeat;

//console.log("Should return true" , i===0)