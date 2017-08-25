import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: SessionReducer,
  ui: uiReducer
});

export default rootReducer;
