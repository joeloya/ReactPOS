import React from "react";
import {View, Image, Text, StatusBar} from "react-native";

export default NavBar = () => {
    return (
        <View style={{
            flexBasis:50, 
            backgroundColor: '#e62e09',
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
            <StatusBar  barStyle="light-content" translucent={true} />
            <Text style={{color:'#EEEEEE', fontSize: 22, marginBottom: 8, marginLeft: 4, fontWeight: 'bold'}}>
              Ventas 
              <Image 
              style={{marginLeft:8, marginBottom: -2, tintColor: 'white', resizeMode: "contain"}}
              source={require('./../assets/dropdown3.png')}/>
              </Text>
          </View>
    )
}