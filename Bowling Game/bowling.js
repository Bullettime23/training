export class Game {
	#rolls = [];

	roll(pins) {
		this.#rolls.push(pins);
	}

	getScore() {
		console.log();
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
			score += this.#pinsInFrame(frameIndex);
			frameIndex += 2;
		}
		return score;
	}

	#isSpare(frameIndex) {
		return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1] === 10;
	}

	#spareBonus(frameIndex) {
		return this.#rolls[frameIndex + 2];
	}

	#isStrike(frameIndex) {
		return this.#rolls[frameIndex] === 10;
	}

	#strikeBonus(frameIndex) {
		return this.#rolls[frameIndex + 1] + this.#rolls[frameIndex + 2];
	}

	#pinsInFrame(frameIndex) {
		return this.#rolls[frameIndex] + this.#rolls[frameIndex + 1];
	}
}
