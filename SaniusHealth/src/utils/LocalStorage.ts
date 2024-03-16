import AsyncStorage from '@react-native-async-storage/async-storage';
const LOGIN_KEY = 'LOGIN_KEY'
const TAB_DATA = 'TAB_DATA'

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

  export const storeArrangedTabs = async (value:any) => {
    try {
      await AsyncStorage.setItem(TAB_DATA, JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };
  export const getArrangedTabs = async () : Promise<Array<{id:number,name:string}>> => {
    try {
      const value = await AsyncStorage.getItem(TAB_DATA);
      if (value !== null) {
       return JSON.parse(value)
      }else{
        return []
      }
    } catch (e) {
      return []
    }
  };

 