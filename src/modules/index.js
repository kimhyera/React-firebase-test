import { combineReducers } from 'redux';
import goods from './goods';
import user from './user';

const rootReducer = combineReducers({
	goods,
	user,
});

export default rootReducer;
