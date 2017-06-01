import { combineReducers } from 'redux';
import tabs from './tabs';
import groups from './groups';
import currentScreen from './currentScreen';

const rootReducer = combineReducers({
  tabs,
  groups,
  currentScreen
});

export default rootReducer;