import {assign} from "lodash";
import {handleActions} from "redux-actions";
import ActionType from "../actions/action-types";

export default handleActions({
    [ActionType.SELECT_GIPHY]: (state, action) => assign({}, state, {
        selected: action.payload
    }),
    [ActionType.CLEAR_GIPHY]: (state, action) => assign({}, state, {
        selected: null
    })
}, {
    selected: null
});