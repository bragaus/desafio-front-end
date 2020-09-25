import { combineReducers } from 'redux';

import pokemon from './pokemon';
import filtro from './filtro';

export default combineReducers({
    pokemon,
    filtro
});