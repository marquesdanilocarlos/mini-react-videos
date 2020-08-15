import React, { createContext, useReducer } from "react";
import { videoInicialState, videoReducer } from "./VideoReducer";

export const VideoStore = createContext(videoInicialState);
const { Provider } = VideoStore;

export default function VideoContext(props) {
    const [state, dispatch] = useReducer(videoReducer, videoInicialState);
    return <Provider value={[state, dispatch]}>{props.children}</Provider>;
}
