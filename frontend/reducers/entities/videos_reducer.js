import { merge } from 'lodash';
import { RECEIVE_SINGLE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_LIKE, DESTROY_LIKE } from '../../actions/like_actions';
import { RECEIVE_SUBSCRIPTION, DESTROY_SUBSCRIPTION } from '../../actions/subscription_actions';

const nullState = {
  currentVideo: {},
  videoList: [],
};



const VideosReducer = ( state = nullState, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SINGLE_VIDEO:
      return Object.assign({}, state, { currentVideo: action.video });
    case RECEIVE_LIKE:
      newState = merge({}, state);
      if(action.like.likeable_type !== 'Video'){
        return state;
      }
      newState.currentVideo.video.like_ids.push(action.like.id);
      newState.currentVideo.video.likes.push(action.like);
      return newState;
    case DESTROY_LIKE:
      newState = merge({}, state);
      if(action.like.likeable_type !== 'Video'){
        return state;
      }
      let like_ids = newState.currentVideo.video.like_ids.filter(id => id !== action.like.id);
      let likes = newState.currentVideo.video.likes.filter(like => like.id !== action.like.id);
      newState.currentVideo.video.like_ids = like_ids;
      newState.currentVideo.video.likes = likes;
      return newState;
    case RECEIVE_SUBSCRIPTION:
      newState = merge({}, state);
      newState.currentVideo.video.uploader_sub_count = action.subscription.subscribed_sub_count;
      return newState;
    case DESTROY_SUBSCRIPTION:
      newState = merge({}, state);
      newState.currentVideo.video.uploader_sub_count = action.subscription.subscribed_sub_count;
      return newState;
    default:
      return state;
  }
};

export default VideosReducer;
