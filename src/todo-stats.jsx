import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TodoStats = ({total, completed, incomplete}) => (
    <div className="todo-stats">
        <ul>
            <li>{total} todos</li>
            <li>{completed} completed</li>
            <li>{incomplete} incomplete</li>
        </ul>
    </div>
);
TodoStats.propTypes = {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    incomplete: PropTypes.number.isRequired
}
const mapStateToProps = (state, ownProps) => {
    return {
        total:  Object.keys(state.todos).length,
        completed: Object.keys(state.todos).filter(k => state.todos[k].completed).length,
        incomplete:  Object.keys(state.todos).filter(k => !state.todos[k].completed).length
    }
}
export default connect(mapStateToProps)(TodoStats);