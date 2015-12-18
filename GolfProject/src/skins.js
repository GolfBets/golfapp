function skins (input, route) {
	var results = {};
	results.scores = [];
	results.winnings = {};
	for (var i = 1; i <= route.playerCount; i++) {
		results.winnings[i] = 0;
		for (var j = input.start; j < input.start + 18; j++) {
			if (j > 18) {
				var k = j - 19;
				var current = "h" + (k+1);
			}
			else {
				var k = j -1;
				var current = "h" + j;
			}
			if (i === 1) {
				results.scores[k] = [];
			}
			if (route.indexUsed === "YES") {
				results.scores[k].push({score: input['player' +i + 'Netscore'][current], name: i});
			}
			else {
				results.scores[k].push({score: input['player' + i + 'score'][current], name: i});
			}
		}
	}
	var cont = results.scores[0];
	var skin = 0;
	var i = 0;
	var others  = route.playerCount - 1;
	while (cont) {
		var lowestPlayer;
		var current = results.scores[i].sort(function (a, b) {
			return a.score - b.score
		})
		if (current[0].score < current[1].score) {
			results.winnings[current[0].name] += (others * route.betPerHole + skin * others);
			for (var j = 1; j < route.playerCount; j++) {
				results.winnings[current[j].name] -= (route.betPerHole + skin)
			}
			skin = 0;
		}
		else {
			skin += route.betPerHole;
		}
		i++;
		console.log(results.winnings)
		cont = results.scores[i];
	}
	return results
}