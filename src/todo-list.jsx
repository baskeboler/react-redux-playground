import React from 'react';
import TodoItem from './todo-item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeTodo, toggleComplete} from './actions';
import PropTypes from 'prop-types'
function TodoList  ({todos, remove, toggle}) {
    return (
    <ul className="todo-list">
        {todos.map((item, index) => <TodoItem key={item.id} item={item} remove={remove} toggle={toggle}></TodoItem>)}
    </ul>
);
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    remove: PropTypes.func,
    toggle: PropTypes.func
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: (id)=>             dispatch(removeTodo(id)),
        toggle: (id) => dispatch(toggleComplete(id))
    }
}
export default connect(x => ({todos: Object.keys(x.todos).map(k => x.todos[k])}), mapDispatchToProps)(TodoList);