import ActionType from "../actions/action-types";
import {handleActions} from "redux-actions";
import {merge} from "lodash";
// const objValues = (obj) => Object.keys(obj).map(k => obj[k]);
// const copyObject = (obj) => Object.assign({}, obj);
export default handleActions({
    [ActionType.ADD_TODO]: (state, action) => merge({}, state, {

        nextTodoId: state.nextTodoId + 1,
        todos: merge({}, state.todos, {

            [state.nextTodoId]: {
                id: state.nextTodoId,
                completed: false,
                text: action.payload.text,
                tags: action.payload.tags || []
            }
        })
    }),
    [ActionType.REMOVE_TODO]: (state, action) => {
        let newTodos = merge({}, state.todos);
        delete newTodos[action.payload];
        let newState = merge({}, state, {
            todos: merge({}, newTodos)
        });
        return newState;
    },
    [ActionType.TOGGLE_COMPLETE]: (state, action) => merge({}, state, {
        todos: merge({}, state.todos, {
            [action.payload]: merge({}, state.todos[action.payload], {
                completed: !state.todos[action.payload].completed
            })
        })
    }),
}, {
    todos: {},
    nextTodoId: 0
});