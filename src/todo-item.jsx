import React from 'react';
import PropTypes from 'prop-types';

function TodoItem  ({item, remove, toggle})  {
    const className = item.completed ? 'completed' : '';
    return (
        <li className={className}>
            <div className="view">
                <input type="checkbox" className="toggle" value={item.completed} onChange={()=>toggle(item.id)} />
                <label htmlFor="">{item.text}</label>
                <button className="destroy" onClick={(e)=> {
                    remove(item.id)
                    }
                }>X</button>
            </div>
            <input type="text" className="edit" value="create a todomvc template"/>
        </li>
    );
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    remove: PropTypes.func,
    toggle: PropTypes.func
};
export default TodoItem;
