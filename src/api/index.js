import axios from 'axios'

const PRODURL = 'https://readittapp.herokuapp.com'
const DEVURL = 'http://localhost:5010'

const API = axios.create({baseURL:PRODURL})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPosts = () => API.get('/posts')

export const createPost = (newPost) => API.post('/posts', newPost)

export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const updatePost = (id, newPost) => API.patch(`/posts/${id}`, newPost)

export const deletePost = (id) => API.delete(`/posts/${id}`)

export const register = (formData) => API.post('/user/register', formData)

export const login = (formData) => API.post('/user/login', formData)
