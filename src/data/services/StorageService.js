export const StorageService = {
    get(key, defaultValue) {
        let value = localStorage.getItem(key) || defaultValue;
        try {
            value = JSON.parse(value);
            return value;
        } catch (error) {
            return value;
        }
    },
    set(key, value) {
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    },
};
