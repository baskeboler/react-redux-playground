import React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { values, keys } from 'lodash';

export const CurrencyExchange = ({ exchange }) => {
  let title = `Exchange rate - ${exchange.base}`;
  let date = exchange.date;

  let ratesTable = (
    <Table striped hover bordered condensed responsive>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {keys(exchange.rates).map((k, i) =>
          <tr key={i}>
            <td>
              {k}
            </td>
            <td>
              {exchange.rates[k]}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
  return (
    <div>
      <h2>
        {date}
      </h2>
      <h3>
        {title}
      </h3>
      <hr />
      {ratesTable}
    </div>
  );
};

const mapStateToProps = state => {};
