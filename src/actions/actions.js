import {createAction} from "redux-actions";
import ActionType from "./action-types";

export const addTodo = createAction(ActionType.ADD_TODO);
export const removeTodo = createAction(ActionType.REMOVE_TODO);
export const toggleComplete = createAction(ActionType.TOGGLE_COMPLETE);
export const addTag = createAction(ActionType.ADD_TAG);
export const removeTag = createAction(ActionType.REMOVE_TAG);
export const saveProfile = createAction(ActionType.SAVE_PROFILE);
export const showModal = createAction(ActionType.SHOW_MODAL);
export const closeModal = createAction(ActionType.CLOSE_MODAL);
