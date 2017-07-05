import fetch from "isomorphic-fetch";

var postsApi = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => fetch(`${postsApi}/posts`).then(res => res.json());
export const getPost = (id) => fetch(`${postsApi}/posts/${id}`, {method: 'GET'}).then(res => res.json());
export const deletePost = (id) => fetch(`${postsApi}/posts/${id}`, {method: 'DELETE'}).then(res => res.json());

export const createPost = (post) => fetch(`${postsApi}/posts/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
}).then(res => res.json());

export const getPostComments = (id) => fetch(`${postsApi}/posts/${id}/comments`).then(res => res.json());