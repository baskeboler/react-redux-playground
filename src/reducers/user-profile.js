import ActionType from "../actions/action-types";
import {handleActions} from "redux-actions";
import {merge} from "lodash";

export default handleActions({
    [ActionType.SAVE_PROFILE]: (state, action) => {
        let newState = merge({}, state, action.payload, {
            lastModified: new Date(),
        });
        return newState;
    }
}, {
    username: 'not set',
    birthDate: new Date(),
    email: '',
    picture: '',
    bio: '',
    lastModified: new Date()
})