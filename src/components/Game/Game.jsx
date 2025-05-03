import { GameLayout } from './GameLayout';
import { Field } from '../Field';
import { Information } from '../Information';
import { RESTART_GAME } from '../../redux/actions/restartGame';
import { useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
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
