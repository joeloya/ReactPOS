import React from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import CheckoutLineItem from "./components/CheckoutLineItem";
import CheckoutButton from "./components/CheckoutButton";
import InventoryItem from "./components/InventoryItem";

const InventoryItems = (props) => {
    const {items} = props;
    return (
        <>
            {items.map((item, index) => (
                <InventoryItem key={index} itemTitle={item.title} itemImageSource={item.imageSource} onPress={() => props.onPress(item)} />
            ))}
        </>
    );
}

class SalesScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            inventoryItems: [
                {title: "T. Maiz 1kg", price: 18.11, imageSource: require("./../../assets/tortilla-maiz.jpg")},
                {title: "T. Blanca 1kg", price: 38.22, imageSource: require("./../../assets/tortilla-maiz.jpg")},
                {title: "T. Mantequilla 1kg", price: 38.33, imageSource: require("./../../assets/tortilla-maiz.jpg")},
                {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../../assets/tortilla-maiz.jpg")},
                {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../../assets/tortilla-maiz.jpg")},
                {title: "Totopos", price: 18.01, imageSource: require("./../../assets/tortilla-maiz.jpg")},
            ],
            checkoutItems: [
                // {title: "T. Maiz 1kg", price: 18.00, quantity: 3},
                // {title: "T. Blanca 1kg", price: 38.00, quantity: 1},
                // {title: "T. Mantequilla 1kg", price: 38.00, quantity: 2},
            ],
        }

    }

    handleItemPress = (item) => {
        console.log(item);
        // First find if item.title not already on checkoutItems
        matchIndex = -1;
        this.state.checkoutItems.some((checkoutItem, index) => {
            if (checkoutItem.title === item.title) {
                matchIndex = index;
                return true;
            }else{
                return false;
            }
        })

        // If there, add quantity to one
        // If not addItem
        if (matchIndex > -1 && this.state.checkoutItems[matchIndex]){
            let newCheckoutItems = [...this.state.checkoutItems];
            newCheckoutItems[matchIndex].quantity = newCheckoutItems[matchIndex].quantity + 1;
            this.setState({
                checkoutItems: newCheckoutItems
            })
        }else{
            let newCheckoutItems = [...this.state.checkoutItems];
            let newCheckoutItem = {
                title: item.title,
                price: item.price,
                quantity: 1,
            }
            newCheckoutItems.push(newCheckoutItem);
            this.setState({
                checkoutItems: newCheckoutItems
            })
        }
    }

    checkoutAmmount = () => {
        return this.state.checkoutItems.reduce((prev,current) => { return prev + (current.price * current.quantity)}, 0).toFixed(2)
    }

    render(){
        return (
        <>
            <View style={styles.inventoryItems}>
                <ScrollView>
                    <View style={styles.inventoryItemsScrollViewWrapper}>
                        <InventoryItems items={this.state.inventoryItems} onPress={this.handleItemPress} />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bill}>
                <ScrollView style={styles.billLineItems}>
                    { this.state.checkoutItems.map( (item, index) => (
                        <CheckoutLineItem key={index} itemTitle={item.title} itemPrice={item.price} itemQuantity={item.quantity}/>
                    ))}
                </ScrollView>
                <CheckoutButton ammount={this.checkoutAmmount()}/>
            </View>
        </>
        );
    }
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

