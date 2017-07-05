import ActionType from "../actions/action-types";
import {handleActions} from "redux-actions";
import {assign} from "lodash";

export default handleActions({
    [ActionType.SAVE_PROFILE]: (state, action) => {
        return assign({}, state, action.payload, {
            lastModified: new Date(),
        });
    }
}, {
    username: 'not set',
    birthDate: new Date(),
    email: '',
    picture: '',
    bio: '',
    lastModified: new Date()
})