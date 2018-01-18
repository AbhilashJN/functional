
//let slice = Array.prototype.slice;




function logger(namespace) {
	
	let logFunction = function(){

		let args = Array.prototype.slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(null,args );
        

	};

	return logFunction;
}

//module.exports = logger;


let f = logger("INFO");
console.log("Should give print INFO my message");
f("my message");