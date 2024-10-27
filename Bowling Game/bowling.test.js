import { Game } from './bowling.js';

let game;

beforeEach(() => {
	game = new Game();
});

describe('Bowling game', () => {
	test('No pins down - score 0', () => {
		rollMany(20, 0);
		expect(game.getScore()).toEqual(0);
	});

	test('1 pin each roll - score 20', () => {
		rollMany(20, 1);

		expect(game.getScore()).toEqual(20);
	});

	test('A single spare', () => {
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.getScore()).toEqual(16);
	});

	test('A single strike', () => {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.getScore()).toEqual(24);
	});

	test('A perfect game', () => {
		rollMany(12, 10);
		expect(game.getScore()).toEqual(300);
	});
});

function rollMany(rolls, pins) {
	for (let i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}

function rollSpare() {
	game.roll(5);
	game.roll(5);
}

function rollStrike() {
	game.roll(10);
}
