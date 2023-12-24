import React, { useContext } from 'react'
import { PostList as PostListData } from '../store/post-list-store'
import Post from './Post'
const PostList = () => {
    const { postList } = useContext(PostListData)
    console.log(postList)
    return (
        <>
            {
                postList.map((post) => (
                    <Post key={post.id} postData={post}/>
                ))
            }
        </>
    )
}

export default PostList