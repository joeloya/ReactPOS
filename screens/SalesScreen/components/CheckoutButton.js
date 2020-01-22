import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const CheckoutButton = () => {
    return (
        <TouchableOpacity onPress={() => console.log('cobrar')}>
            <View style={styles.checkoutButtonContainer}>
                <Text 
                    style={{
                        color:'#EEEEEE',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>Cobrar</Text>
                <Text 
                    style={{
                        color:'#EEEEEE',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>$74.00</Text>
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