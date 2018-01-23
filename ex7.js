function reduce(arr, fn, initial) {
	function reducer(index, prev){
		if (index === arr.length) 
		{
			return prev;
		}
		
		return reducer(index + 1, fn(prev, arr[index], index, arr));
	}

	return reducer(0,initial);
}
  
module.exports = reduce;