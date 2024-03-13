import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native"
import { getLoginDetails, storeLoginDetails } from "../utils/LocalStorage"
import { LOGIN_ERROR } from "../utils/Message"

const Login = ()=>{
    const [textVal,setTextVal] = useState('') 
    const navigate = useNavigation()
    useEffect(()=>{
         getLoginDetails().then(res=>{
            setTextVal(res)
         }).catch(error=>{
            //do nothing 
         })
    },[])
    useEffect(()=>{
        if(textVal==='1234'){
            storeLoginDetails(textVal)
            //@ts-ignore
           navigate.replace("Dashboard",{})
        }
    },[textVal])
    
    return <View style={styles.container}>
        <TextInput placeholderTextColor={"white"} maxLength={4} placeholder="Enter PIN here" style={styles.textInput} value={textVal} onChangeText={setTextVal} />
        {textVal.length>0 &&  <Text style={styles.errorMessage}>{LOGIN_ERROR}</Text>}
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
    },
    errorMessage : {
        color:"red"
    },
    textInput:{
        backgroundColor:"gray",
        paddingHorizontal:20,
        color:"white",
        height:40,
        width:140

    },
})

export default Login