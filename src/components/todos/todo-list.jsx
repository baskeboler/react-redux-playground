import React from 'react';
import TodoItem from './todo-item';
import { connect } from 'react-redux';
import { removeTodo, toggleComplete } from '../../actions/actions';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { getTodos } from '../../selectors';

function TodoList({ todos, remove, toggle }) {
  return (
    <ListGroup>
      {todos.map((item, index) =>
        <ListGroupItem key={item.id}>
          <TodoItem key={item.id} item={item} remove={remove} toggle={toggle} />
        </ListGroupItem>
      )}
    </ListGroup>
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

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeTodo(id)),
    toggle: id => dispatch(toggleComplete(id))
  };
};

const mapStateToProps = state => {
  return {
    todos: getTodos(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
