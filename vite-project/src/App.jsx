import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import "./App.css"
import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import PostList from "./components/PostList"
import Sidebar from "./components/Sidebar"
import PostListProvider from "./store/post-list-store"
const App = () => {
    const [selectedTab, setSelectedTab] = useState("Home")
    return (
        <PostListProvider>
            <div className="app-container ">
                <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                <div className="w-100">
                    <Header />
                    {
                        selectedTab === "Home" ? <PostList /> : <CreatePost />
                    }
                </div>
            </div>
        </PostListProvider>
    )
}

export default App