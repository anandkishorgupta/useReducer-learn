
const Post = ({ postData }) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{postData.id}</h5>
                    <p className="card-text">{postData.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Post