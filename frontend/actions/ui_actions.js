import * as VIDUtil from '../util/video_util';

export const CHANGE_LOAD = 'CHANGE_LOAD';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const changeLoad = () => ({
  type: CHANGE_LOAD
});

export const receiveSearchResults = (searchTerm) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchTerm
});
