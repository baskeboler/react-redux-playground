import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addTodo} from './actions';
import TodoList from './todo-list';
import TodoStats from './todo-stats';
let App = ({dispatch}) => (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React fucker</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input className="header-input" type="text" placeholder="what needs to be done?" autoFocus onBlur={e => {dispatch(addTodo(e.target.value)); e.target.value='';}}/>
        <TodoList></TodoList>
        <TodoStats></TodoStats>
      </div>
    );

const AppContainer = connect()(App);

export default AppContainer;
