import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Stats from '../components/todos/todo-stats';
import { Giphy } from '../components/giphy/search';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
);

storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );

storiesOf('Stats', module).add('stats', () => <Stats />);
storiesOf('giphy', module).add('giphy', () =>
  <Giphy select={action('selected')} />
);
