import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {Legend} from 'grommet';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {getCompletedTodosTotal, getIncompleteTodosTotal, getTodosTotal} from "../../selectors/index";

const TodoStats = ({total, completed, incomplete}) => {
    let series = [
        {
            label: "total",
            value: total,
            colorIndex: 'graph-1'
        },{
            label: "completed",
            value: completed,
            colorIndex: 'graph-2'
        },{
            label: "incomplete",
            value: incomplete,
            colorIndex: 'graph-3'
        }
    ];
    
    return (
        <ListGroup >
            {
                series.map((i, index) => (
                <ListGroupItem key={index}>
                    <p>{ i.label }</p>
                    <p>{ i.value }</p>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
};
TodoStats.propTypes = {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    incomplete: PropTypes.number.isRequired
};
const mapStateToProps = (state) => {
    return {
        total:  getTodosTotal(state),
        completed: getCompletedTodosTotal(state),
        incomplete:  getIncompleteTodosTotal(state)
    }
};
export default connect(mapStateToProps)(TodoStats);