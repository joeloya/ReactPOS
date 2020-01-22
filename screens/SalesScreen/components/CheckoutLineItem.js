import React from "react";

import {View, Text} from "react-native";

const CheckoutLineItem = ({itemTitle, itemPrice, itemQuantity}) => {
    return (
        <View style={{
        flexDirection:'column',
        marginBottom: 4,
        marginTop: 8,
        borderBottomColor: 'rgba(0,0,0,.2)',
        borderBottomWidth: 0.333,
        }}>
            <View 
            style={{
                flexDirection:'column', 
                height: 70, 
                alignItems: 'center', 
                paddingLeft: 20,
                paddingRight: 20,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 4,
                    }}>
                    <View style={{flexGrow:1, alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 16, fontWeight:'500',}}>{itemTitle}</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 4}}>
                    <View style={{flexGrow: 2}}>
                        <Text style={{fontSize: 16, color: "rgba(0,0,0,0.4)"}}>${itemPrice.toFixed(2)}</Text>
                    </View>
                    <View style={{flexGrow: 1, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 16, color: "rgba(0,0,0,0.4)"}}>x{itemQuantity}</Text>
                    </View>
                    <View style={{flexGrow: 1, alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 16, color: "rgba(0,0,0,0.4)"}}>${(itemQuantity*itemPrice).toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CheckoutLineItem;