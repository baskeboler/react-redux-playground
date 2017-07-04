import ActionType from "../actions/action-types";
import {find, merge, values} from "lodash";
import {handleActions} from "redux-actions";

export default handleActions({

    [ActionType.ADD_TAG]: (state, action) => {
        if (find(values(state.tags), tag => tag.text === action.payload) === undefined) {
            return merge({}, state, {
                tags: merge({}, state.tags, {
                    [state.nextTagId]: {
                        id: state.nextTagId,
                        text: action.payload
                    }
                }),
                nextTagId: state.nextTagId + 1
            });
        } else {
            return merge({}, state);
        }
    }
}, {
    tags: {},
    nextTagId: 0
})