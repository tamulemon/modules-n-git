exports.addition = function(x, y) {
  return x + y;
};
exports. multiplication = function () {
	var result = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		result = result * arguments[i];
	}
	return result;
}

