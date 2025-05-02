import { GameLayout } from './GameLayout';
import { Field } from '../Field';
import { Information } from '../Information';
import { store } from '../../redux/store';

export const Game = () => {
	const handleRestart = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<>
			<GameLayout onRestart={handleRestart}>
				<Information />
				<Field />
			</GameLayout>
		</>
	);
};
