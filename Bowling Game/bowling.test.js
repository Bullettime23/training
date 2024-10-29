import { Game } from './bowling.js';

let game;

beforeEach(() => {
	game = new Game();
});

describe('Bowling game', () => {
	test('Hit nothing', () => {
		rollMany(20, 0);
		expect(game.getScore()).toBe(0);
	});

	test('All ones', () => {
		rollMany(20, 1);
		expect(game.getScore()).toBe(20);
	});

	test('One spare', () => {
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.getScore()).toBe(16);
	});

	test('One strike', () => {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.getScore()).toBe(24);
	});

	test('Perfect game', () => {
		rollMany(12, 10);
		expect(game.getScore()).toBe(300);
	});
});

function rollMany(rolls, pins) {
	for (let rollIndex = 0; rollIndex < rolls; rollIndex++) {
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
