import { merge } from 'lodash';
import { RECEIVE_SINGLE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_LIKE } from '../../actions/like_actions';

const nullState = {
  currentVideo: {},
  videoList: [],
};

const VideosReducer = ( state = nullState, action ) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_VIDEO:
      return Object.assign({}, state, { currentVideo: action.video });
    case RECEIVE_LIKE:
      const like_ids = state.currentVideo.video.like_ids.push(action.like.id);
      return Object.assign({}, state, { currentVideo: {
        video: {
          like_ids
        }
      }});
    default:
      return state;
  }
};

export default VideosReducer;
