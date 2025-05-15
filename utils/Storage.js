import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
        console.log(error);
    }
};

export const getItem = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    } catch(error) {
        console.log(error);
    }
};

export const renderTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    return (minutes < 10 ? "0" + minutes : "" + minutes) + ":" + (remainderSeconds < 10 ? "0" + remainderSeconds : remainderSeconds);
}