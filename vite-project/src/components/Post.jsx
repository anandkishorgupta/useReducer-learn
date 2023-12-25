import { useContext } from "react"
import { PostList } from "../store/post-list-store"

const Post = ({ postData }) => {
    const { deletePost } = useContext(PostList)
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{postData.id}</h5>
                    <p className="card-text">{postData.message}</p>
                    <button
                        onClick={() => deletePost(postData.id)}
                    >delete</button>
                </div>
            </div>
        </div>
    )
}

export default Post