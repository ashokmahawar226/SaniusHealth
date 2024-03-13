import AsyncStorage from '@react-native-async-storage/async-storage';
const LOGIN_KEY = 'LOGIN_KEY'
export const storeLoginDetails = async (value:string) => {
    try {
      await AsyncStorage.setItem(LOGIN_KEY, value);
    } catch (e) {
      // saving error
    }
  };

  export const getLoginDetails = async () : Promise<string> => {
    try {
      const value = await AsyncStorage.getItem(LOGIN_KEY);
      if (value !== null) {
       return value
      }else{
        return ''
      }
    } catch (e) {
      return ''
    }
  };