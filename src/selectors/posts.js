import { createSelector } from 'reselect';
import { keys, values } from 'lodash';

export const getAllPostsById = state => state.posts.postsById;
export const getAllPostsArray = state => values(state.posts.postsById);
export const getAllPostsIdsByUserId = state => state.posts.postsByUserId;
export const getAllUserPosts = userId =>
  createSelector(
    [getAllPostsById, getAllPostsIdsByUserId],
    (postMap, postIdsByUserId) => postIdsByUserId[userId].map(id => postMap[id])
  );

export const getAllPostsByUserId = createSelector(
  [getAllPostsIdsByUserId, getAllPostsById],
  (postsIdsByUserId, postMap) =>
    keys(postsIdsByUserId).map(k =>
      postsIdsByUserId[k].map(postId => postMap[postId])
    )
);
