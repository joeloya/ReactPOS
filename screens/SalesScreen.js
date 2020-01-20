import React from "react";
import {View, Text, Image} from "react-native";

const InventoryItem = (props) => {
    return (
        <View 
        style={{
            width: 200, 
            height: 180, 
            borderWidth:2, 
            borderColor: 'lightgrey', 
            backgroundColor: 'rgba(255,255,255,.75)',
            marginRight: 22,
            marginBottom: 16, 
            justifyContent:'space-between',
            alignItems: 'center',
            paddingBottom: 5,
            borderRadius: 5
        }}>
        <Image resizeMode="cover" style={{width: 200, height: 130}} source={require("./../assets/tortilla-maiz.jpg")}/>
        <Text style={{fontSize: 16, fontWeight:'500',}} numberOfLines={1}>{props.itemTitle}</Text>
    </View>
    )
}

export default SalesScreen = (props) => {
    return (
    <>
        <View 
            style={{
                flex:1, 
                flexGrow:4, 
                backgroundColor: '#EEE', 
                flexDirection: 'row', 
                flexWrap: 'wrap',
                padding: 16,
            }}>
            <InventoryItem itemTitle="T. De Maiz 1kg" />
            <InventoryItem itemTitle="T. Blanca 1kg" />
            <InventoryItem itemTitle="T. Mantequilla 1kg" />
            <InventoryItem itemTitle="T. Blanca 1/2kg" />
            <InventoryItem itemTitle="T. De Maiz 1/2kg" />
            <InventoryItem itemTitle="Totopos"/>
        </View>
        <View style={{flex:1, flexGrow:2, borderLeftWidth: 1, borderLeftColor: 'lightgrey'}}>
        <Text>TICKET</Text>
        </View>
    </>
    );
}