import AsyncStorage from "@react-native-async-storage/async-storage";

const useLocalStorage = () => {
  return {
    get: async (key) => await AsyncStorage.getItem(key),
    set: async (key, value) => await AsyncStorage.setItem(key, value),
    remove: async (key) => await AsyncStorage.removeItem(key),
  };
};

export default useLocalStorage;
