import { createAction } from 'redux-actions';
import ActionType from './action-types';
import { fetchLatestExchangeRates } from '../services';
import {
  createPost as createPostWeb,
  fetchPosts,
  getPostComments
} from '../services/posts';

export const addTodo = createAction(ActionType.ADD_TODO);
export const removeTodo = createAction(ActionType.REMOVE_TODO);
export const toggleComplete = createAction(ActionType.TOGGLE_COMPLETE);
export const addTag = createAction(ActionType.ADD_TAG);
export const removeTag = createAction(ActionType.REMOVE_TAG);
export const saveProfile = createAction(ActionType.SAVE_PROFILE);
export const showModal = createAction(ActionType.SHOW_MODAL);
export const closeModal = createAction(ActionType.CLOSE_MODAL);
export const selectGiphy = createAction(ActionType.SELECT_GIPHY);
export const clearGiphy = createAction(ActionType.CLEAR_GIPHY);
export const requestExchangeRates = createAction(
  ActionType.REQUEST_EXCHANGE_RATES,
  fetchLatestExchangeRates
);
export const createPost = createAction(ActionType.POST_CREATE, createPostWeb);
export const listPost = createAction(ActionType.POST_LIST, fetchPosts);
export const listPostComments = createAction(
  ActionType.POST_GET_COMMENTS,
  getPostComments
);
