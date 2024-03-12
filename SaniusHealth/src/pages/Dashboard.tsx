import React from "react";
import { View,Text, StyleSheet } from "react-native";
import TabView from "../components/TabView";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = ()=>{
    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <TabView/>
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