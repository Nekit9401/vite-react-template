import { legacy_createStore as createStore } from 'redux';
import { gameReducer } from './reducer';

export const store = createStore(gameReducer);
