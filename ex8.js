function duckCount() {
	// SOLUTION GOES HERE
	
	let args = Array.prototype.slice.call(arguments);
	var res = args.filter( function(arg){

		return Object.hasOwnProperty.call(arg,"quack");
	}  );
	return res.length;
}

module.exports = duckCount;



let notDuck = Object.create({quack: true});
let duck = {quack: true};
let duck2 = {quack:true , as:1};
let duck3= {q:1};
let duck4={Quack:true};
let duck5={};

console.log("Should return 1 for given input" , duckCount(duck, notDuck)===1);
console.log("Should return 0 for input with 0 matches ", duckCount(notDuck,duck3)===0);
console.log("Should return 0 for 0 arguments:" , duckCount()===0);
console.log("Should return 0 for empty object and wrong case:" , duckCount(duck5,duck4)===0);
