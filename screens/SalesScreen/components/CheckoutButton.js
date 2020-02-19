import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ShadowPropTypesIOS} from "react-native";

const CheckoutButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.checkoutButtonContainer}>
                <Text 
                    style={{
                        color:'#EEEEEE',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>PAY</Text>
                <Text 
                    style={{
                        color:'#EEEEEE',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>{props.ammount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CheckoutButton;


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