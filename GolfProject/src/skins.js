function skins (input) {
	var results = {};
	for (var i = 0; i < input.playerCount; i++) {
		results[i] = {};
		results[i].score = [];
		results[i].winnings = 0;
		for (var i = input.start; i < input.start + 18; i++) {
			if (i > 18) {
				var current = "h" + (i - 18);
			}
			else {
				var current = "h" + i;
			}
			if (input.indexUsed = "YES") {
				results[i].score.push(player1NetScore[current]);
			}
			else {
				results[i].score.push(player1Score[current]);
			}
		}
	}
	var cont = scores[1][0];
	var skin = 0;
	while (cont) {
		if ()
	}
}