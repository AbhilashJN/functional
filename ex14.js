function repeat(operation, num) {
	// Modify this so it doesn't cause a stack overflow!
	return function() {
		if (num <= 0) return;
		operation();
		return repeat(operation, --num);
	};
}

function trampoline(f) {
	while (f && f instanceof Function) {
		f = f();
	}
}
module.exports = function(operation, num) {
	// You probably want to call your trampoline here!
	trampoline(function() {
		return repeat(operation, num);
	});
};