import React from "react";
import TimerService from "../data/services/TimerService";
// import { Container } from './styles';

function Video(props) {
    const video = props.video || {};
    const clickVideo = props.onClick || {};

    return (
        <li
            onClick={() => {
                clickVideo(video);
            }}
        >
            <img src={video.cover} alt={video.title} />
            <span>{TimerService.formatTime(video.duration)}</span>
            <h2>{video.title}</h2>
        </li>
    );
}

export default Video;
