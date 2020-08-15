import React, { useState, useContext } from "react";
import { VideoStore } from "../data/video/VideoContext";
export default function NewForm() {
    let [, videoDispatch] = useContext(VideoStore);
    const [title, settitle] = useState(""),
        [duration, setduration] = useState(""),
        [url, seturl] = useState(""),
        [cover, setcover] = useState("");

    function save() {
        let newVideo = {
            id: Date.now(),
            title,
            duration,
            url,
            cover,
        };

        videoDispatch({ type: "add", value: newVideo });

        reset();
    }

    function reset() {
        settitle("");
        setduration("");
        seturl("");
        setcover("");
    }

    return (
        <div className="form">
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => settitle(event.target.value)}
            />

            <label htmlFor="duration">Duração</label>
            <input
                type="text"
                id="duration"
                value={duration}
                onChange={(event) => setduration(event.target.value)}
            />

            <label htmlFor="url">Vídeo</label>
            <input
                type="text"
                id="url"
                value={url}
                onChange={(event) => seturl(event.target.value)}
            />

            <label htmlFor="cover">Capa</label>
            <input
                type="text"
                id="cover"
                value={cover}
                onChange={(event) => setcover(event.target.value)}
            />

            <button onClick={save}>Salvar</button>
        </div>
    );
}
