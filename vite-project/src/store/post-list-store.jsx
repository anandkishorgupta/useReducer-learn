import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({ children }) => {
    
    const [postList, dispatchPostList] = useReducer(postListReducer, [{ id: 1, message: "go to home" }])

    const addPost = () => {

    }
    const deletePost = () => {

    }
    return <PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>
}

export default PostListProvider