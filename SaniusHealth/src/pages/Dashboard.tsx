import React, { useState } from "react";
import { View,Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../Data.json"
import { useNavigation } from "@react-navigation/native";


const Dashboard = ()=>{
  const [currentData,setCurrentData] = useState(data.data)
  const navigation = useNavigation()
  const onUpdateText = (updatedText:string,index:number)=>{
    let tempData = [...currentData]
    if(index<tempData.length){
      tempData[index] = {...tempData[index],text:updatedText}
      setCurrentData(tempData)
    }
   
  }
  const onClickCell = (item:string,index:number)=>{
    //@ts-ignore
    navigation.navigate("EditText",{
      textVal : item,
      index:index,
      onUpdateText : onUpdateText
    })
  }
    return (
        <View style={styles.container}>
            <SafeAreaView/>
          <Text style={styles.headerText}>Home Screen</Text>
          <FlatList 
            style={{marginTop:10}}
            renderItem={(item)=>{
              return <TouchableOpacity onPress={()=>{
                  onClickCell(item.item.text,item.index)
              }} style={styles.cellElement} key={item.item.id}><Text style={styles.textElement}>{item.item.text}</Text></TouchableOpacity>
            }}
          data={currentData}/>
        </View>
      );
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
         flex: 1, 
    },
    headerText:{
      fontSize:16,
      textAlign:"center"
    },
    textElement:{
      textAlign:"center"
    },
    cellElement:{
      height:60
    }
})