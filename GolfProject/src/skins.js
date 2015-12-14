function skins (input) {
	var winnings = {};
	var score = {};
	for (var i = 1; i <= input.playerCount; i++) {
		winnings.[i] = 0;
		scores[i] = [];
		for (var i = input.start; i < input.start + 18; i++) {
			if (i > 18) {
				var current = "h" + (i - 18);
			}
			else {
				var current = "h" + i;
			}
			if (input.indexUsed = "YES") {
				scores[i].push(player1NetScore[current]);
			}
			else {
				scores[i].push(player1Score[current]);
			}
		}
	}
}