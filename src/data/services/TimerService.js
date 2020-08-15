let TimeService = {
    formatTime(duration) {
        let minutes = Math.floor(duration / 60)
            .toString()
            .padStart(2, "0");
        let seconds = (duration % 60).toString().padStart(2, "0");

        return `${minutes}:${seconds}`;
    },
};

export default TimeService;
