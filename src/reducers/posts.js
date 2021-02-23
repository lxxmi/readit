import {FETCH_ALL, CREATE, UPDATE, DELETE} from './../constants/actionTypes';


export default (posts=[], action) => {
    switch(action.type){    
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload]
        case UPDATE:
            return posts.map(p => p._id === action.payload._id ? action.payload : p )
        case DELETE:
            return posts.filter(p => p._id !== action.payload  )
        default:
            return posts
    }
}

// const postState = null
// let data
// export default (postState, action) => {
//     switch(action.type){    
//         case 'FETCH_ALL':
//             return {posts:action.payload}
//         case 'CREATE':
//             return { posts:[...postState.posts, action.payload]}
//         case 'EDIT':
//             return {...postState, currentPost:action.payload.id}
//         case 'UPDATE':
//          data = postState.posts
//             data = [...data]
//             return {posts: data.map(p => p._id === action.payload._id ? action.payload : p )}
//         case 'DELETE':
//              data = postState.posts
//             data = [...data]
//             return {posts: data.filter(p => p._id !== action.payload  )}
//         default:
//             return postState
//     }
// }

