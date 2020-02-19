import React from "react";
import {View} from "react-native";
import SalesScreen from "./../screens/SalesScreen";
import NavBar from "./NavBar";

export default ScreenRouter = (props) => {
    console.log("router render");
    return (
    <>
    <NavBar screen={props.screen} />
    <View style={{flex:1, flexGrow:1, flexDirection: 'row'}}>
      <SalesScreen/>
    </View>
    </>
    )
}