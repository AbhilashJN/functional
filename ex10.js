function logger(namespace) {
	// SOLUTION GOES HERE


	return console.log.bind(null,namespace);
}


//module.exports=logger

let f = logger("Prefix");

console.log("Should print Prefix abc def" );
f("abc","def");


f=logger("");
console.log("Should print  abc def");
f("abc","def");


