import { combineReducers } from 'redux';
import VideosReducer from './videos_reducer';
import CommentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  videos: VideosReducer,
  comments: CommentsReducer,
});

export default entitiesReducer;
