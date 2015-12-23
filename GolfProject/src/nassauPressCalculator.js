function nassauPressCalculator (initialStarts, end, winners, auto) {
	var bets = 0;
	var betStarts = initialStarts.slice();
	if (auto) {
		var press = 0;
		for (var i = betStarts; i < end; i++) {
			if (winners[i] == 1) {
					press++;
				}
			else if (winners[i] == 2) {
				press --;
			}
			if (press === 2 || press === -2) {
				press = 0;
				betStarts.push(i+1)
			}
		}
	}
	for (var i = 0; i < betStarts.length; i++) {
		var press = 0;
		for (var j = betStarts[i] - 1; j <= end; j++) {
			if (winners[j] == 1) {
				press++;
			}
			else if (winners[j] == 2) {
				press --;
			}
		}
		if (press > 0) {
			bets++;
		}
		if (press < 0) {
			bets--;
		}
	}
	return bets;
}

module.exports = nassauPressCalculator;