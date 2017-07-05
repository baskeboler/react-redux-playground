import ActionType from "../actions/action-types";
import {handleActions} from "redux-actions";
import {assign} from "lodash";
// const objValues = (obj) => Object.keys(obj).map(k => obj[k]);
// const copyObject = (obj) => Object.assign({}, obj);
export default handleActions({
    [ActionType.ADD_TODO]: (state, action) => assign({}, state, {

        nextTodoId: state.nextTodoId + 1,
        todos: assign({}, state.todos, {

            [state.nextTodoId]: {
                id: state.nextTodoId,
                completed: false,
                text: action.payload.text,
                tags: action.payload.tags || []
            }
        })
    }),
    [ActionType.REMOVE_TODO]: (state, action) => {
        let newTodos = assign({}, state.todos);
        delete newTodos[action.payload];
        return assign({}, state, {
            todos: assign({}, newTodos)
        });
    },
    [ActionType.TOGGLE_COMPLETE]: (state, action) => assign({}, state, {
        todos: assign({}, state.todos, {
            [action.payload]: assign({}, state.todos[action.payload], {
                completed: !state.todos[action.payload].completed
            })
        })
    }),
}, {
    todos: {},
    nextTodoId: 0
});