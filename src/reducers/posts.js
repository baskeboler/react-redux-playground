import ATypes from "../actions/action-types";
import {handleActions} from "redux-actions";
import {assign, concat, reduce} from "lodash";

const byId = (posts) => reduce(posts, (map, post) => assign({}, map, {
    [post.id]: post
}), {});

const byUserId = (posts) => reduce(posts, (map, post) => assign({}, map, {
    [post.userId]: concat(map[post.userId], [post.id])
}), {});

export default handleActions({
    [ATypes.POST_CREATE]: (state, action) => assign({}, state, {
        postsById: assign({}, state.postsById, {
            [action.payload.id]: assign({}, action.payload)
        }),
        postsByUserId: assign({}, state.postsByUserId, {
            [action.payload.userId]: [...state.postsByUserId[action.payload.userId], action.payload.id]
        })
    }),
    [ATypes.POST_LIST]: (state, action) => assign({}, state, {
        postsById: assign({}, state.postsById, byId(action.payload)),
        postsByUserId: assign({}, state.postsByUserId, byUserId(action.payload))
    }),
    [ATypes.POST_GET_COMMENTS]: (state, action) => assign({}, state, {
        postsById: assign({}, state.postsById, {
            [action.payload[0].postId]: assign({}, state.postsById[action.payload[0].postId], {
                comments: [...action.payload]
            })
        })
    })
}, {
    postsByUserId: {},
    postsById: {}
});