export class Game {
	#rolls = {};
	#currentRoll = 0;

	roll(pins) {
		this.#rolls[this.#currentRoll++] = pins;
	}

	getScore() {
		let score = 0;
		let frameIndex = 0;
		for (let frame = 0; frame < 10; frame++) {
			if (this.#isStrike(frameIndex)) {
				score += 10 + this.#strikeBonus(frameIndex);
				frameIndex++;
				continue;
			}
			if (this.#isSpare(frameIndex)) {
				score += 10 + this.#spareBonus(frameIndex);
				frameIndex += 2;
				continue;
			}
			score += this.#sumOfBallsInFrame(frameIndex);
			frameIndex += 2;
		}
		return score;
	}

	#isSpare(frameIndex) {
		return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1] === 10;
	}

	#isStrike(frameIndex) {
		return this.#rolls[frameIndex] === 10;
	}

	#strikeBonus(frameIndex) {
		return this.#rolls[frameIndex + 1] + this.#rolls[frameIndex + 2];
	}

	#spareBonus(frameIndex) {
		return this.#rolls[frameIndex + 2];
	}

	#sumOfBallsInFrame(frameIndex) {
		return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1];
	}
}
