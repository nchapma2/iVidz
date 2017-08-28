import * as COMUtil from '../util/comment_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';

export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const createComment = comment => dispatch => (
  COMUtil.createComment(comment)
    .then((comment) => dispatch(receiveSingleComment(comment)))
);
