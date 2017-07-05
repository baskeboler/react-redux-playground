const apikey = '87a96e8dbf7942ce98892e1217596286';

const baseUrl = 'https://api.giphy.com/v1/gifs/search';

const queryUrl = query => `${baseUrl}?api_key=${apikey}&q=${query}`;

export const searchGiphy = q =>
  fetch(queryUrl(q))
    .then(res => res.json())
    .then(res => {
      console.log('i got a response');
      return res;
    })
    .catch(err => {
      console.log('there was an error: ', err.message);
    });
