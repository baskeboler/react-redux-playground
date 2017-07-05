import React from 'react';
import { CurrencyExchange } from '../components/exchange-rate/CurrencyExchange';
import { Col, Grid, Row } from 'react-bootstrap';
import { requestExchangeRates } from '../actions';
import { getLatestExchangeRates } from '../selectors';
import { connect } from 'react-redux';
const View = ({ exchange }) =>
  <Grid>
    <Row>
      <Col sm={10} smOffset={1}>
        <CurrencyExchange exchange={exchange} />
      </Col>
    </Row>
  </Grid>;

const mapStateToProps = state => {
  return {
    exchange: getLatestExchangeRates(state)
  };
};

export default connect(mapStateToProps)(View);
