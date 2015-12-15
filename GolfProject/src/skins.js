function skins (input) {
	var results = {};
	results.scores = [];
	results.winnings = {};
	for (var i = 1; i <= input.playerCount; i++) {
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
			if (i = 1) {
				results.scores[k] = [];
			}
			if (input.indexUsed = "YES") {
				results.scores[k].push({score: input['player' +i + 'NetScore' + current], name: i});
				console.log(results.scores)
			}
			else {
				results.scores[k].push({score: input['player' + i + 'Score' + current], name: i});
			}
		}
	}
	console.log(results)
	var cont = results.scores[0];
	var skin = 0;
	var i = 0;
	while (cont) {
		var lowestPlayer;
		var current = results.scores[i].sort(function (a, b) {
			return a.score - b.score
		})
		console.log(current)
		if (current[0].score < current[1].score) {
			results.winnings[current[0].name] += (input.playerCount * input.betPerHole + skin);
			for (var j = 1; j < input.playerCount; j++) {
				results.winnings[current[j]] -= (input.betPerHole + skin / (input.playerCount -1))
			}
			skin = 0;
		}
		else {
			skin += (input.playerCount * input.betPerHole);
		}
		i++;
		cont = results.scores[i];
	}
	return results
}