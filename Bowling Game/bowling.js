export class Game {
	rolls = [];
	currentRoll = 0;

	roll(pins) {
		this.score += pins;
		this.rolls[this.currentRoll++] = pins;
	}

	getScore() {
		let score = 0;
		for (let frame = 0, frameIndex = 0; frame < 10; frame++) {
			if (this.isStrike(frameIndex)) {
				score += 10 + this.strikeBonuse(frameIndex);
				frameIndex += 1;
				continue;
			}

			if (this.isSpare(frameIndex)) {
				score += 10 + this.spareBonuse(frameIndex);
				frameIndex += 2;
				continue;
			}
			score += this.sumOfBallsInFrame(frameIndex);
			frameIndex += 2;
		}
		return score;
	}

	sumOfBallsInFrame(frameIndex) {
		return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
	}

	isSpare(frameIndex) {
		return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
	}

	isStrike(frameIndex) {
		return this.rolls[frameIndex] === 10;
	}

	strikeBonuse(frameIndex) {
		return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
	}

	spareBonuse(frameIndex) {
		return this.rolls[frameIndex + 2];
	}
}
