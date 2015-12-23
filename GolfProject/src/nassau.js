function nassau (input, route) {
	var results = {};
	results.scores = [];
	results.winnings = {};
	var team11 = route.teams[0];
	var team12 = route.teams[1];
	var team21 = route.teams[2];
	var team22 = route.teams[3];
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
				results.scores[k] = {};
			}
			if (route.indexUsed === "YES") {
				results.scores[k][i] = input['player' +i + 'Netscore'][current];
			}
			else {
				results.scores[k][i] = input['player' + i + 'score'][current];
			}
		}
	}
	function winner () {
		var winnerArray = [];
		for (var i = 0; i < results.scores.length; i++) {
			if (!results.scores[i]['1']) break;
			if (Math.min(results.scores[i][team11], results.scores[i][team12]) < Math.min(results.scores[i][team21], results.scores[i][team22])) {
				winnerArray.push(1);
			}
			else if (Math.min(results.scores[i][team11], results.scores[i][team12]) > Math.min(results.scores[i][team21], results.scores[i][team22])) {
				winnerArray.push(2);
			}
			else {
				winnerArray.push(0);
			}
		}
		return winnerArray;
	}
	results.winners = winner()
	var nassauPressCalculator = require('./nassauPressCalculator.js');
	results.front = nassauPressCalculator(input.front, 9, results.winners, route.auto9);
	results.back = nassauPressCalculator(input.back, 18, results.winners, route.auto9);
	results.all18 = nassauPressCalculator(input.total, 18, results.winners, route.auto18);
	results.total = results.front + results.back + results.all18;
	return results
}