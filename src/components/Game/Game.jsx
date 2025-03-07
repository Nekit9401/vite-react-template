import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { Field } from '../Field';
import { Information } from '../Information';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = (field) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((idx) => field[idx] === currentPlayer),
		);
	};

	const checkDraw = (field) => {
		return field.every((cell) => cell);
	};

	const handleCellClick = (idx) => {
		if (!field[idx] && !isGameEnded) {
			const newField = [...field];
			newField[idx] = currentPlayer;
			setField(newField);
			if (checkWinner(newField)) {
				setIsGameEnded(true);
			} else if (checkDraw(newField)) {
				setIsDraw(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}
		}
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<>
			<GameLayout onRestart={handleRestart}>
				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<Field field={field} onCellClick={handleCellClick} />
			</GameLayout>
		</>
	);
};
