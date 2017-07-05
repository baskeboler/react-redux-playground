import ActionType from "../actions/action-types";
import {handleActions} from "redux-actions";

export default handleActions({
        [ActionType.SHOW_MODAL]: (state, action) => {
            return [...state, {
                ...action.payload
            }]
        },
        [ActionType.CLOSE_MODAL]: (state, action) => state.slice(0, -1)
    }, []
);
