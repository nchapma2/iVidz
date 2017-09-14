import * as VIDUtil from '../util/video_util';

export const CHANGE_LOAD = 'CHANGE_LOAD';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const changeLoad = () => ({
  type: CHANGE_LOAD
});

export const receiveSearchResults = () => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchTerm
});

export const fetchResults = searchTerm => dispatch => (
  VIDUtil.fetchSearchResults()
    .then(searchTerm => dispatch(receiveSearchResults(searchTerm)))
);
