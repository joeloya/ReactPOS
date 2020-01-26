import React from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";

const InventoryItem = (props) => {
    console.log("render InventoryItem");
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.inventoryCard}>
                <Image resizeMode="cover" style={{width: 200, height: 130}} source={props.itemImageSource}/>
                <Text style={{fontSize: 16, fontWeight:'500',}} numberOfLines={1}>{props.itemTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default InventoryItem;

const styles = StyleSheet.create({
    inventoryCard: {
        width: 195, 
        height: 175, 
        borderWidth:2, 
        borderColor: 'lightgrey', 
        backgroundColor: 'rgba(255,255,255,.75)',
        marginRight: 22,
        marginBottom: 16, 
        justifyContent:'space-between',
        alignItems: 'center',
        paddingBottom: 5,
        borderRadius: 5
    },
});