import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';

const entitiesReducer = combineReducers({
  videos: VideosReducer
});

export default entitiesReducer;
