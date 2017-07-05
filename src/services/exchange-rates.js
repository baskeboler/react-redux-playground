import fetch from 'isomorphic-fetch';
const apiUrl = 'http://api.fixer.io/latest';

export const fetchLatestExchangeRates = () =>
  fetch(apiUrl).then(res => res.json());
