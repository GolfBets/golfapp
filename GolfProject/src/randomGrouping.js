var randomGroups = function (array) {
	var options = [array[1], array[2], array[3]];
	var groups = {}
	var random = 3*(Math.random());
	console.log(random)
	if (random < 1) {
		groups.first = [array[0], array[1], array[2], array[3]];
		var used = array[1];
		options.splice(0,1);
	}
	else if (random < 2) {
		groups.first = [array[0], array[2], array[1], array[3]];
		var used = array[2];
		options.splice(1,1);
	}
	else {
		groups.first = [array[0], array[3], array[1], array[2]];
		var used = array[3];
		options.splice(2,1);
	}
	console.log(options)
	var random = 2*(Math.random());
	if (random < 1) {
		groups.second = [array[0], options[0], options[1], used];
		groups.third = [array[0], options[1], options[0], used];
	}
	else {
		groups.second = [array[0], options[1], options[0], used];
		groups.third = [array[0], options[0], options[1], used]
	}
	return groups;
}