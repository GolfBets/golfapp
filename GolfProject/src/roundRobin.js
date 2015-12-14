function computeResults (input) {
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
		if (input.indexUsed = "YES") {
			scores.player1.push(player1NetScore[current]);
			scores.player2.push(player2NetScore[current]);
			scores.player3.push(player3NetScore[current]);
			scores.player4.push(player4NetScore[current]);
		}
		else {
			scores.player1.push(player1Score[current]);
			scores.player2.push(player2Score[current]);
			scores.player3.push(player3Score[current]);
			scores.player4.push(player4Score[current]);
		}
	}
	var cont = scores.player1[0];
	var i = 0;
	var minPool = 0;
	var lowTotalPool = 0;
	while (cont) {
		if (i = 6 || 12) {
			minPool = 0;
			lowTotalPool = 0;
		}
		if (i < 6) {
			var team11 = input.teams[0];
			var team12 = input.teams[1];
			var team21 = input.teams[2];
			var team22 = input.teams[3];
		}
		else if (i < 12) {
			var team11 = input.teams[4];
			var team12 = input.teams[5];
			var team21 = input.teams[6];
			var team22 = input.teams[7];
		}
		else {
			var team11 = input.teams[8];
			var team12 = input.teams[9];
			var team21 = input.teams[10];
			var team22 = input.teams[11];
		}
		if (Math.min(scores.['player' + team11][i], scores.['player' + team12].hole[i]) < Math.min(scores.['player' + team21][i], scores.['player' + team22].hole[i])) {
			player[team11] += (input.betPerHole + minPool/2);
			player[team12] += (input.betPerHole + minPool/2);
			player[team21] -= (input.betPerHole + minPool/2);
			player[team22] -= (input.betPerHole + minPool/2);
			minPool = 0;
		}
		else if (Math.min(scores.['player' + team11][i], scores.['player' + team12].hole[i]) > Math.min(scores.['player' + team21][i], scores.['player' + team22].hole[i])) {
			player[team11] -= (input.betPerHole + minPool/2);
			player[team12] -= (input.betPerHole + minPool/2);
			player[team21] += (input.betPerHole + minPool/2);
			player[team22] += (input.betPerHole + minPool/2);
			minPool = 0;
		}
		else {
			minPool += (4 * input.betPerHole);
		}
		if (input.lowTotal == true) {
			if (scores.['player' + team11][i] + scores.['player' + team12].hole[i] < scores.['player' + team21][i] + scores.['player' + team22].hole[i]) {
				player[team11] += (input.betPerHole + lowTotalPool/2);
				player[team12] += (input.betPerHole + lowTotalPool/2);
				player[team21] -= (input.betPerHole + lowTotalPool/2);
				player[team22] -= (input.betPerHole + lowTotalPool/2);
				lowTotalPool = 0;
			}
			else if (scores.['player' + team11][i] + scores.['player' + team12].hole[i] > scores.['player' + team21][i] + scores.['player' + team22].hole[i]) {
				player[team11] -= (input.betPerHole + lowTotalPool/2);
				player[team12] -= (input.betPerHole + lowTotalPool/2);
				player[team21] += (input.betPerHole + lowTotalPool/2);
				player[team22] += (input.betPerHole + lowTotalPool/2);
				lowTotalPool = 0;
			}
			else {
				lowTotalPool += (4 * input.betPerHole);
			}
		}
	i++
	cont = scores.player1[i];
	}
	return players;
}