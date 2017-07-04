import React from "react";
import PropTypes from "prop-types";
import {Button, Checkbox, Label} from "react-bootstrap";

function TodoItem  ({item, remove, toggle})  {
    const labels = item.tags.map((tag,i) => (
        <Label key={i}>{tag} </Label>
    ));
    return (
        <div >
                <Checkbox   value={item.completed} onChange={()=>toggle(item.id)}> {item.text} </Checkbox>
                <div className="labels-container">{labels}</div>
            <Button bsSize="small"  bsStyle="danger" onClick={(e)=> {
                remove(item.id)
                }
            } > x </Button>
        </div>
    );
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    remove: PropTypes.func,
    toggle: PropTypes.func
};
export default TodoItem;
