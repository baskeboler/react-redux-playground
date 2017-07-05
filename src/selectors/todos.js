import { createSelector } from 'reselect';
import { values } from 'lodash';

export const getTodos = state => values(state.todos.todos);
export const getTodosTotal = createSelector([getTodos], todos => todos.length);

export const getCompletedTodos = createSelector([getTodos], todos =>
  todos.filter(todo => todo.completed)
);

export const getCompletedTodosTotal = createSelector(
  [getCompletedTodos],
  todos => todos.length
);

export const getIncompleteTodos = createSelector([getTodos], todos =>
  todos.filter(t => !t.completed)
);

export const getIncompleteTodosTotal = createSelector(
  [getTodosTotal, getCompletedTodosTotal],
  (total, complete) => total - complete
);
