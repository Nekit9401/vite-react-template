import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Game } from './components/Game';
import { Provider } from 'react-redux';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</StrictMode>,
);
