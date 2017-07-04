import React from "react";
import "./App.css";
import "react-tag-input/example/reactTags.css";
import {connect} from "react-redux";
import {Grid, Row} from "react-bootstrap";
let App = ({children, dispatch}) => (
        <Grid>
          <Row >
            {children}
          </Row>
        
        </Grid>
    );

const AppContainer = connect()(App);

export default AppContainer;
