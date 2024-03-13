import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from "react-native"
import { getLoginDetails, storeLoginDetails } from "../utils/LocalStorage"
import { LOGIN_ERROR } from "../utils/Message"


export type RootStackParamList = {
  data: { 
        index:number,
        textVal:string,
        onUpdateText : CallableFunction
    };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

interface IEditCell{
    
}


const EditCell = (props:IEditCell)=>{
    const route = useRoute<RootRouteProps<'data'>>();
    const {params} = route
    const [textVal,setTextVal] = useState(params.textVal || '') 
    const navigate = useNavigation()
  
    const onClickCancel = ()=>{
        //@ts-ignore
        navigate.goBack()
    }
    const onPressSave = ()=>{
        params && params.onUpdateText && params.onUpdateText(textVal,params.index)
        navigate.goBack()
    }
    
    return <View style={styles.container}>
        <TextInput style={styles.textInput} value={textVal} onChangeText={setTextVal} />
        <View style={styles.buttonView}>
            <TouchableOpacity onPress={onClickCancel} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressSave} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center"
    },
    textInput:{
        backgroundColor:"gray",
        paddingHorizontal:20,
        color:"white",
        height:40

    },
    buttonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        marginTop:20
    },
    button:{
        backgroundColor:"blue",
        paddingHorizontal:20,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12
    },
    buttonText:{
        color:"white",
        fontSize:16
    }
})

export default EditCell