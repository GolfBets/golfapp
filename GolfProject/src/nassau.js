function nassau (input, route) {
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
			if (i < 6) {
				var team11 = route.teams[0] + "";
				var team12 = route.teams[1] + "";
				var team21 = route.teams[2] + "";
				var team22 = route.teams[3] + "";
			}
			else if (i < 12) {
				var team11 = route.teams[4] + "";
				var team12 = route.teams[5] + "";
				var team21 = route.teams[6] + "";
				var team22 = route.teams[7] + "";
			}
			else {
				var team11 = route.teams[8] + "";
				var team12 = route.teams[9] + "";
				var team21 = route.teams[10] + "";
				var team22 = route.teams[11] + "";
			}
			console.log(team11)
			console.log(i)
			console.log(results)
			if (!results.scores[i]['1']) break;
			console.log(results.scores[i])
			if (Math.min(results.scores[i][team11], results.scores[i][team12]) < Math.min(results.scores[i][team21], results.scores[i][team22])) {
				console.log('hi')
				winnerArray.push(1);
			}
			else if (Math.min(results.scores[i][team11], results.scores[i][team12]) > Math.min(results.scores[i][team21], results.scores[i][team22])) {
				winnerArray.push(2);
			}
			else {
				winnerArray.push(0);
			}
		}
		console.log(winnerArray)
		return winnerArray;
	}
	results.winners = winner()
	// function front (frontArray, current) {
	// 	for (var i = 0; i < frontArray; i++) {

	// 	}
	// }
	return results
}