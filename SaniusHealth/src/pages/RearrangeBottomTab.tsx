import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getArrangedTabs, storeArrangedTabs } from "../utils/LocalStorage";
import { arrayRotate } from "../utils/utils";


const DEFAULT_TABS = [{
    id : 1,
    name :"Home"
},{
    id : 2,
    name :"Public"
},{
    id : 3,
    name :"Private"
}]
interface Tab {
    id:number,
    name:string
}
const RearrangeBottomTab = ()=>{
  const navigation = useNavigation()
  const [tabs,setTabs] = useState(DEFAULT_TABS)
  useEffect(()=>{
    getArrangedTabs().then((res:Array<{id:number,name:string}>)=>{
            if(res.length>0){
                setTabs(res)
            }
    })
  },[navigation])
 

  const reOrderTab = ()=>{
    const updatedTab = arrayRotate(tabs)
    if(updatedTab && updatedTab.length>0){
      storeArrangedTabs(updatedTab)
      setTabs(updatedTab)
    }
   
  }
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <Text style={styles.headerText}>{tabs[0].name}</Text>
            <TouchableOpacity style={styles.orderButton} onPress={reOrderTab}>
                <Text>Reorder</Text>
            </TouchableOpacity>
            <View style={styles.tabParentView}>
              {tabs.map(ele=>{
                return <TouchableOpacity style={[styles.tabVIew,tabs[0].id !== ele.id ? {backgroundColor:"green"}:{backgroundColor:"white"}]} key={ele.id}><Text style={styles.eleView}>{ele.name}</Text></TouchableOpacity>
              })}
            </View>
        </View>
      );
}

export default RearrangeBottomTab

const styles = StyleSheet.create({
    container:{
         flex: 1, 
         alignContent:"center",
         alignItems:"center"
    },
    tabVIew:{
      height:"100%",
      width:"33.33%",
      justifyContent:"center",
      backgroundColor:"green"
    },
    headerText:{
      fontSize:16,
      textAlign:"center"
    },
    eleView:{textAlign:"center"},
    textElement:{
      textAlign:"center"
    },
    cellElement:{
      height:60
    },
    orderButton:{
        height:40,
        backgroundColor:"gray",
        justifyContent:"center",
        borderRadius:12,
        paddingHorizontal:12,
        marginTop:60
    },
    tabParentView:{
      flexDirection:"row",
      justifyContent:"space-evenly",
      width:"100%",
      position:"absolute",
      bottom:20,
      height:60,
      backgroundColor:"red"
    }
})