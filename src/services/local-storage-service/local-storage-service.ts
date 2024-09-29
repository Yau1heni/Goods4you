export const localStorageService = {
    getItem(key: string) {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return undefined;
        }
        return JSON.parse(serializedValue);
    },
    setItem(key: string, value: string) {
        const serializedValue = JSON.stringify(value);
        return localStorage.setItem(key, serializedValue);
    },
    removeItem(key: string) {
        return localStorage.removeItem(key);
    },
};
