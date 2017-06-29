import ActionType from './action-types';
import {handleActions} from 'redux-actions';

export default handleActions({
    [ActionType.ADD_TODO]: (state, action) => Object.assign({}, state, {
        
        nextTodoId: state.nextTodoId + 1, 
        todos: Object.assign({}, state.todos, {

               [state.nextTodoId]:  {
                id: state.nextTodoId,
                completed: false, 
                text: action.payload
            }
        })
    }),
    [ActionType.REMOVE_TODO]: (state, action) => {
        let newTodos = Object.assign({}, state.todos);
        delete newTodos[action.payload];
        let newState = Object.assign({}, state, {
        todos: Object.assign({}, newTodos)
    });
        return newState;
    },
    [ActionType.TOGGLE_COMPLETE]: (state, action) => Object.assign({}, state, {
        todos: Object.assign({}, state.todos, {
            [action.payload]: Object.assign({}, state.todos[action.payload], {
                completed: !state.todos[action.payload].completed
            })
        }) 
    })
}, {todos: {}, nextTodoId: 0});

 