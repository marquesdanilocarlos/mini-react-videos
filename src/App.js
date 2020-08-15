import React from "react";
import "./App.css";
import VideoList from "./ui/VideoList";
import NewForm from "./ui/NewForm";
import VideoPlayer from "./ui/VideoPlayer";
import VideoContext from "./data/video/VideoContext";

function App() {
    return (
        <div className="App">
            <VideoContext>
                <VideoPlayer />
                <NewForm />
                <VideoList />
            </VideoContext>
        </div>
    );
}

export default App;
