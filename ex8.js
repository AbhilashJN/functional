function duckCount() {
	// SOLUTION GOES HERE
	
	let args = Array.prototype.slice.call(arguments);
	
	if( args.length===0)
	{
		return 0;
	}
	else{
		
		let temp = Object.hasOwnProperty.call(args[0] , "quack")?1:0;
		
        
		temp+= duckCount.apply(null,args.slice(1)); 

		return temp;
	}
}

//module.exports = duckCount;



let notDuck = Object.create({quack: true});
let duck = {quack: true};
let duck2 = {quack:true , as:1};
let duck3= {q:1};

console.log("Should return true for correct input" , duckCount(duck, notDuck)===1);
console.log("Should return true for input with 0 matches ", duckCount(notDuck,duck3)===0);
