import { handleActions } from 'redux-actions';
import ActionType from '../actions/action-types';
import { assign } from 'lodash';
export default handleActions(
  {
    [ActionType.REQUEST_EXCHANGE_RATES]: (state, action) => {
      return assign({}, state, {
        [action.payload.date]: assign({}, action.payload),
        latest: assign({}, action.payload)
      });
    }
  },
  {
    latest: {}
  }
);
