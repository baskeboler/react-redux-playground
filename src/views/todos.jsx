import React from 'react';
import AddTodo from '../components/todos/add-todo';
import TodoList from '../components/todos/todo-list';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
const Todos = ({ dispatch }) =>
  <Grid>
    <PageHeader>Todos</PageHeader>
    <Row>
      <Col smOffset={2} sm={8}>
        <AddTodo />
      </Col>
    </Row>
    <Row>
      <Col smOffset={2} sm={8}>
        <TodoList />
      </Col>
    </Row>
  </Grid>;

export default connect()(Todos);
