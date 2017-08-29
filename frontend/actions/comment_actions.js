import * as COMUtil from '../util/comment_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = videoId => dispatch => (
  COMUtil.fetchComments(videoId)
    .then((comments) => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
  COMUtil.createComment(comment)
    .then((comment) => dispatch(receiveSingleComment(comment)))
);
