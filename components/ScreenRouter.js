import React from "react";
import {View} from "react-native";
import SalesScreen from "./../screens/SalesScreen";

export default ScreenRouter = (props) => {
    console.log("router render");
    return (
    <View style={{flex:1, flexGrow:1, flexDirection: 'row'}}>
      <SalesScreen/>
    </View>
    )
}