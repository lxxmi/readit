import axios from 'axios'

const url = 'https://readittapp.herokuapp.com/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, newPost) => axios.patch(`${url}/${id}`, newPost)

export const deletePost = (id) => axios.delete(`${url}/${id}`)
