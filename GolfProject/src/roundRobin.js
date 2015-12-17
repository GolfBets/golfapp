function computeResults (input, route) {
	var bet = route.betPerHole + 0;
	var scores = {
		player1: [],
		player2: [],
		player3: [],
		player4: []
	};
	var players = {
		1: 0,
		2: 0,
		3: 0,
		4: 0
	}
	for (var i = input.start; i < input.start + 18; i++) {
		if (i > 18) {
			var current = "h" + (i - 18);
		}
		else {
			var current = "h" + i;
		}
		if (route.indexUsed = "YES") {
			scores.player1.push(input.player1Netscore[current]);
			scores.player2.push(input.player2Netscore[current]);
			scores.player3.push(input.player3Netscore[current]);
			scores.player4.push(input.player4Netscore[current]);
		}
		else {
			scores.player1.push(input.player1score[current]);
			scores.player2.push(input.player2score[current]);
			scores.player3.push(input.player3score[current]);
			scores.player4.push(input.player4score[current]);
		}
	}
	var cont = scores.player1[0];
	var i = 0;
	var minPool = 0;
	var lowTotalPool = 0;
	while (cont) {
		if (i === 6 || i ===12) {
			minPool = 0;
			lowTotalPool = 0;
		}
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
		var a = 'player' + team11;
		var b = 'player' + team12;
		var c = 'player' + team21;
		var d = 'player' + team22;
		var e = minPool + bet;
		if (Math.min(scores[a][i], scores[b][i]) < Math.min(scores[c][i], scores[d][i])) {
			players[team11] += e;
			players[team12] += e;
			players[team21] -= e;
			players[team22] -= e;
			minPool = 0;
		}
		else if (Math.min(scores[a][i], scores[b][i]) > Math.min(scores[c][i], scores[d][i])) {
			players[team11] -= e;
			players[team12] -= e;
			players[team21] += e;
			players[team22] += e;
			minPool = 0;
		}
		else {
			minPool += bet;
		}
		if (route.lowTotal == true) {
			var f = lowTotalPool + bet;
			if (scores[a][i] + scores[b][i] < scores[c][i] + scores[d][i]) {
				players[team11] += f;
				players[team12] += f;
				players[team21] -= f;
				players[team22] -= f;
				lowTotalPool = 0;
			}
			else if (scores[a][i] + scores[b][i] > scores[c][i] + scores[d][i]) {
				players[team11] -= f;
				players[team12] -= f;
				players[team21] += f;
				players[team22] += f;
				lowTotalPool = 0;
			}
			else {
				lowTotalPool += bet;
			}
		}
	i++
	cont = scores.player1[i];
	}
	return players;
}
