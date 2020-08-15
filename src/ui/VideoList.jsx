import React, { useContext, useMemo } from "react";
import Video from "./Video";
import { VideoStore } from "../data/video/VideoContext";
// import { Container } from './styles';

function VideoList() {
    let [videoState, videoDispatch] = useContext(VideoStore);
    let videoList = useMemo(() => {
        function clickVideo(video) {
            videoDispatch({ type: "select", value: video });
        }

        return videoState.videos.map((item) => (
            <Video key={item.id} video={item} onClick={clickVideo} />
        ));
    }, [videoState, videoDispatch]);

    return <ul className="list">{videoList}</ul>;
}

export default VideoList;
