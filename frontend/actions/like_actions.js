import * as LIKEUtil from '../util/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const createLike = like => dispatch => (
  LIKEUtil.createLike(like)
    .then((like) => dispatch(receiveLike(like)))
);
