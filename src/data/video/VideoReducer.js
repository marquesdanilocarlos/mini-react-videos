import { StorageService } from "../services/StorageService";

export const videoInicialState = {
    selectedVideo: {},
    videos: StorageService.get(
        "videoList",
        []
    ) /*[
        {
            id: 1,
            title: "Doguinho",
            duration: 10,
            url:
                "https://storage.coverr.co/videos/SVJ98lhH8cnU02cTjUPHdT02WrAAsZVHzj/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTk3MjQyNDgzfQ.2uzmLAI_mCFRQeMXWHgy9gd9yVMhKtDJQa_cfeKOGvc",
            cover:
                "https://storage.coverr.co/t/SVJ98lhH8cnU02cTjUPHdT02WrAAsZVHzj",
        },
        {
            id: 3,
            title: "Paisagem",
            duration: 10,
            url:
                "https://storage.coverr.co/videos/UusHlZ7mFPqZDjPd00ahqJH3MLR00mJYkF/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTk3NDE4NDUwfQ.7_6OGjdSgazYb7hNKTeH68v_bPWYUsueIWUJZXnJAVE",
            cover:
                "https://storage.coverr.co/t/UusHlZ7mFPqZDjPd00ahqJH3MLR00mJYkF",
        },
        {
            id: 4,
            title: "Lago",
            duration: 10,
            url:
                "https://storage.coverr.co/videos/5WTH539f5ykUBV8bqMUTBIFBvB6YqpdF/preview?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTk3NDE4NDUwfQ.7_6OGjdSgazYb7hNKTeH68v_bPWYUsueIWUJZXnJAVE",
            cover:
                "https://storage.coverr.co/t/5WTH539f5ykUBV8bqMUTBIFBvB6YqpdF",
        },
    ]*/,
};

export function videoReducer(state, action) {
    switch (action.type) {
        case "add":
            let newList = [...state.videos, action.value];
            StorageService.set("videoList", newList);
            return { ...state, videos: newList };
            break;
        case "select":
            return { ...state, selectedVideo: action.value };
            break;
        default:
            return state;
    }
}
