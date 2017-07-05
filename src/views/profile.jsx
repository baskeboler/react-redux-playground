import Profile from '../components/profile/profile-edit';
import React from 'react';

import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
const View = ({ dispatch }) =>
  <Grid>
    <PageHeader>Profile</PageHeader>
    <Row>
      <Col sm={8} smOffset={2}>
        <Profile />
      </Col>
    </Row>
  </Grid>;

export default connect()(View);
