import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store"
const CreatePost = () => {
    const { addPost } = useContext(PostList)
    const id = useRef()
    const message = useRef()
    console.log(message)
    return (
        <div className='ms-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">id</label>
                <input type="number" className="form-control"
                    ref={id}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">message</label>
                <input type="text" className="form-control" ref={message} />
            </div>
            <button className="btn btn-primary"
                onClick={() => addPost({ id: id.current.value, message: message.current.value })}
            >Submit</button>
        </div>
    )
}

export default CreatePost