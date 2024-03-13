import React, { useState } from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../Data.json"


const Dashboard = ()=>{
  const [currentTabData,setCurrentTabData] = useState(data.data)
    return (
        <View style={styles.container}>
            <SafeAreaView/>
          <Text>Home Screen</Text>
        </View>
      );
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
         flex: 1, 
         //alignItems: 'center',
        // justifyContent: 'center' 
    }
})