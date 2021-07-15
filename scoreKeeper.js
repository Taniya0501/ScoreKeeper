const p1 = {
	score: 0,
	display: document.querySelector('#p1Display'),
	button: document.querySelector('#p1Button')
};

const p2 = {
	score: 0,
	display: document.querySelector('#p2Display'),
	button: document.querySelector('#p2Button')
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let winningScore = 3;
let isGameOver = false;

function updateScore(player,opponent) {
	if(!isGameOver) {
		player.score += 1;
		if(player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('winner');
			opponent.display.classList.add('loser');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener('click', function() {
	updateScore(p1,p2);
})

p2Button.addEventListener('click', function() {
	updateScore(p2,p1);
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function() {
	winningScore = parseInt(this.value);
	reset();
})

function reset() {
	isGameOver = false;
	for(p of [p1,p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.button.disabled = false;
		p.display.classList.remove('winner','loser');
	}
}
