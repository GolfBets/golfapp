var computeResults = function (input) {
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
		4:0
	}
		if (input.indexUsed = "YES") {
		var handicap = true;
	}
	else {
		var handicap = false;
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
	while (cont !== 0) {
		if (i < 6) {
			
		}
	}
}