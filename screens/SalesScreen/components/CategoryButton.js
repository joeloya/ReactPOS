import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const CategoryButton = (props) => {
    return (
        <TouchableOpacity  onPress={props.onPress}>
            <View
                style={{
                height: 80,
                minWidth: 180,
                backgroundColor: props.activeCategory === props.category ? 'rgb(77,77,77)' : null,
                justifyContent: 'center',
                alignItems: 'center',
                
                }
            }>
                    <Text style={{
                        fontSize: 18,
                        color: 'rgb(222,222,222)',
                    }}>
                        {props.category}
                    </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryButton;


const styles = StyleSheet.create({
    checkoutButtonContainer: {
        height: 100, 
        backgroundColor: '#e62e09',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
});