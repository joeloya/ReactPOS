import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import CheckoutLineItem from "./components/CheckoutLineItem";
import CheckoutButton from "./components/CheckoutButton";
import InventoryItem from "./components/InventoryItem";

const InventoryItems = () => {
    return (
        <>
            <InventoryItem itemTitle="T. De Maiz 1kg" itemImageSource={require("./../../assets/tortilla-maiz.jpg")} />
            <InventoryItem itemTitle="T. Blanca 1kg" itemImageSource={require("./../../assets/tortilla-maiz.jpg")} />
            <InventoryItem itemTitle="T. Mantequilla 1kg" itemImageSource={require("./../../assets/tortilla-maiz.jpg")} />
            <InventoryItem itemTitle="T. Blanca 1/2kg" itemImageSource={require("./../../assets/tortilla-maiz.jpg")} />
            <InventoryItem itemTitle="T. De Maiz 1/2kg" itemImageSource={require("./../../assets/tortilla-maiz.jpg")} />
            <InventoryItem itemTitle="Totopos" itemImageSource={require("./../../assets/tortilla-maiz.jpg")}/>
        </>
    );
}

const SalesScreen = (props) => {
    return (
    <>
        <View style={styles.inventoryItems}>
            <ScrollView>
                <View style={styles.inventoryItemsScrollViewWrapper}>
                    <InventoryItems />
                </View>
            </ScrollView>
        </View>
        <View style={styles.bill}>
            <ScrollView style={styles.billLineItems}>

                <CheckoutLineItem itemTitle="T. Maiz 1kg" itemPrice={18.00} itemQuantity={3}/>
                <CheckoutLineItem itemTitle="T. Blanca 1kg" itemPrice={38.00} itemQuantity={1}/>
                <CheckoutLineItem itemTitle="T. Mantequilla 1kg" itemPrice={38.00} itemQuantity={1}/>

            </ScrollView>
            <CheckoutButton/>
        </View>
    </>
    );
}

export default SalesScreen;

const styles = StyleSheet.create({
    inventoryItems: {
        flex:1,
        flexGrow:4,
        backgroundColor: '#EEE',
        padding: 16,
    },
    inventoryItemsScrollViewWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bill: {
        flex:1,
        flexGrow:2,
        borderLeftWidth: 1,
        borderLeftColor: 'lightgrey',
        justifyContent: 'flex-start',
    },
    billLineItems: {
        flex:1,
        flexDirection: 'column',
    },
});

