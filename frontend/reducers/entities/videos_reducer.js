import { merge } from 'lodash';
import { RECEIVE_SINGLE_VIDEO } from '../../actions/video_actions';

const nullState = {
  currentVideo: {},
  videoList: [],
};

const VideosReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_VIDEO:
      return Object.assign({}, state, { currentVideo: action.video });
    default:
      return state;
  }
};

export default VideosReducer;
