import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = [...currPostList]
    if (action.type === "DELETE_POST") {
        newPostList.filter((post) => post.id !== action.payload.postid)
    }
    else if (action.type === "ADD_POST") {
        // newPostList = [action.payload.post, ...currPostList]

        newPostList.push(action.payload.post)


    }
    return newPostList
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, [])

    const addPost = (post) => {
        console.log(post)
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                post
            }
        })
    }

    const deletePost = (postid) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postid
            }
        })

    }
    return <PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>
}

export default PostListProvider