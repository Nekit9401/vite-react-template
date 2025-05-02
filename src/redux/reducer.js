const initialState = {
	field: Array(9).fill(''),
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	WIN_PATTERNS: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],
};

export const gameReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'CELL_CLICK': {
			const { field, currentPlayer, isGameEnded, WIN_PATTERNS } = state;
			const newField = [...field];
			if (newField[payload] || isGameEnded) return state;

			newField[payload] = currentPlayer;
			const isWinner = WIN_PATTERNS.some((pattern) =>
				pattern.every((idx) => newField[idx] === currentPlayer),
			);
			const isDraw = newField.every((cell) => cell);

			return {
				...state,
				field: newField,
				currentPlayer:
					isWinner || isDraw
						? currentPlayer
						: currentPlayer === 'X'
							? '0'
							: 'X',
				isGameEnded: isWinner,
				isDraw: isDraw,
			};
		}
		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};
