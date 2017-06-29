import {createAction} from 'redux-actions';
import ActionType from './action-types';

export const addTodo = createAction(ActionType.ADD_TODO);
export const removeTodo = createAction(ActionType.REMOVE_TODO);
export const toggleComplete = createAction(ActionType.TOGGLE_COMPLETE);

