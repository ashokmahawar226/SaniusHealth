import React from "react"
import { View } from "react-native"

interface ITabView{
    childreen?:React.ReactNode
}

const TabView = (props:ITabView)=>{

    return <View style={{backgroundColor:"red",height:100,width:"100%"}}>
            {props.childreen}
        </View>
}

export default TabView