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

const CategoriesList = () => {

    const categories = ['Todos', 'Tortillas', 'Cremeria', 'Abarrotes', 'Carnes', 'Panaderia', 'Cocina']
    const activeCategory = 'Todos';

    return (
        <>
        { categories.map((category, index) => (
            <View
                key={index} 
                style={{
                height: 80,
                minWidth: 180,
                backgroundColor: activeCategory === category ? 'rgb(77,77,77)' : null,
                justifyContent: 'center',
                alignItems: 'center',
                
                }
            }>
                    <Text style={{
                        fontSize: 18,
                        color: 'rgb(222,222,222)',
                    }}>
                        {category}
                    </Text>
            </View>
        ))}
        <View style={{height: 80, width: 150}}></View>
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

        function createCheckoutItem(inventoryItem) {
            return {
                title: inventoryItem.title,
                price: inventoryItem.price,
                quantity: 1,
            }
        }
        console.log(item);
        // First find if item.title not already on checkoutItems
        let matchIndex = -1;
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
            let newCheckoutItem = createCheckoutItem(item);
            let newCheckoutItems = [...this.state.checkoutItems, newCheckoutItem];
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
                <ScrollView style={{flex: 1, padding: 16 }}>
                    <View style={styles.inventoryItemsScrollViewWrapper}>
                        <InventoryItems items={this.state.inventoryItems} onPress={this.handleItemPress} />
                    </View>
                </ScrollView>
                <View style={{
                    height: 100,
                    paddingLeft: 10,
                    backgroundColor: 'rgb(32,32,32)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row', 
                    borderTopWidth: 1, 
                    borderTopColor: 'rgb(55,55,55)'}}>
                    <ScrollView horizontal contentContainerStyle={{alignItems: 'center'}}>
                    <CategoriesList/>
                    </ScrollView>
                    <View style={{
                        height: 100,
                        right: 0,
                        width: 75,
                        position: "absolute",
                        backgroundColor: 'rgb(32,32,32)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: '100%', 
                            borderLeftWidth: 2,
                            borderLeftColor: 'rgb(77,77,77)',
                            height: 70, justifyContent: 'center',
                            alignItems: 'center'}}>
                       <Text style={{fontSize: 25, color: 'rgb(222,222,222)'}}>></Text>
                       </View>
                    </View>
                </View>
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
        flexDirection: 'column',
    },
    inventoryItemsScrollViewWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bill: {
        flex:1,
        flexGrow:2,
    },
    billLineItems: {
        flex:1,
        flexDirection: 'column',
        borderLeftWidth: 1,
        borderLeftColor: 'lightgrey',
    },
});

