import * as VIDUtil from '../util/video_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_SINGLE_VIDEO = 'RECEIVE_SINGLE_VIDEO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_FILE = 'RECEIVE_FILE';

export const receiveFile = () => ({
  type: RECEIVE_FILE,
});

export const receiveSingleVideo = (video) => ({
  type: RECEIVE_SINGLE_VIDEO,
  video
});

export const createVideo = (video) => dispatch => (
  VIDUtil.createVideo(video)
    .then((vid) => dispatch(receiveSingleVideo(vid)),
    errors => dispatch(receiveErrors(errors)))
);

export const fetchSingleVideo = videoId => dispatch => (
  VIDUtil.fetchSingleVideo(videoId)
    .then((video) => dispatch(receiveSingleVideo(video)))
);
