function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {

      			let result = submittedUsers.every(function(x){

      				return goodUsers.some(function (y){
				return y.id === x.id;
			});
      			} );
      			return result;


	};
}

module.exports = checkUsersValid;


console.log("Should return true for given input" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:1},{id:3}])===true
);

console.log("Should return false for given input" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:1},{id:7}])===false
);

console.log("Should return true for given empty array input" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([])===true
);


console.log("Should return ftrue for given input with attribute order changed" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:2},{id:1}])===true
);

console.log("Should return true for given input where goodUsers is same as submittedUsers" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:1},{id:2},{id:3},{id:4}])===true
);

console.log("Should return false for given input where submittedUsers has more elements than goodUsers" ,
	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:1},{id:2},{id:3},{id:4},{id:5}])===false
);