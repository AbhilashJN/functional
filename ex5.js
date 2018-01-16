function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
  
      			let result = submittedUsers.every(function(x){
      				return goodUsers.map(function(y){ return y.id}).includes(x.id)
      			} )
      			return result


      };
    }

   // module.exports = checkUsersValid



   console.log("Should return true for correct input" , 


   	(checkUsersValid([{id:1},{id:2},{id:3},{id:4}]) )([{id:1},{id:3}])

   	)