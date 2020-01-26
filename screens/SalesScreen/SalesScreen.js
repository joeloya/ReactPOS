import React, { useState, useEffect } from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import CheckoutLineItem from "./components/CheckoutLineItem";
import CheckoutButton from "./components/CheckoutButton";
import InventoryItem from "./components/InventoryItem";
import CategoryButton from "./components/CategoryButton";


const SalesScreen = (props) => {

    const mockProducts = [
        {title: "T. Maiz 1kg", price: 18.11, imageSource: require("./../../assets/tortilla-maiz.jpg")},
        {title: "T. Blanca 1kg", price: 38.22, imageSource: require("./../../assets/tortilla-maiz.jpg")},
        {title: "T. Mantequilla 1kg", price: 38.33, imageSource: require("./../../assets/tortilla-maiz.jpg")},
        {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../../assets/tortilla-maiz.jpg")},
        {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../../assets/tortilla-maiz.jpg")},
        {title: "Totopos", price: 18.01, imageSource: require("./../../assets/tortilla-maiz.jpg")},
    ]
    const mockCategories = ['Todos', 'Tortillas', 'Cremeria', 'Abarrotes', 'Carnes', 'Panaderia', 'Cocina']
    const mockActiveCategory = 'Tortillas';

    // screen input state
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    // internal state
    const [activeCategory, setActiveCategory] = useState('');
    const [invoiceItems, setInvoiceItems] = useState([]); 

    useEffect(() => {
        setProducts(mockProducts)
        setCategories(mockCategories)
        setActiveCategory(mockActiveCategory)
    },[])

    handleItemPress = (item) => {

        function createInvoiceItem(invoiceItem) {
            return {
                title: invoiceItem.title,
                price: invoiceItem.price,
                quantity: 1,
            }
        }

        // 1 - First find if item already in current invoice
        let matchIndex = -1;
        invoiceItems.some((invoiceItem, index) => {
            if (invoiceItem.title === item.title) {
                matchIndex = index;
                return true;
            }else{
                return false;
            }
        })

        // If item already in current invoice, increment quantity
        // If not add new item

        if (matchIndex > -1 && invoiceItems[matchIndex]){
            let newInvoiceItems = [...invoiceItems];
            newInvoiceItems[matchIndex].quantity = newInvoiceItems[matchIndex].quantity + 1;
            setInvoiceItems(newInvoiceItems);
        }else{
            let newInvoiceItem = createInvoiceItem(item);
            let newInvoiceItems = [...invoiceItems, newInvoiceItem];
            setInvoiceItems(newInvoiceItems);
        }
    }

    checkoutAmmount = () => {
        return invoiceItems.reduce((prev,current) => { return prev + (current.price * current.quantity)}, 0).toFixed(2)
    }

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

    const handleCategoryButtonPress = (category) => {
        setActiveCategory(category);
    }

    const CategoriesList = (props) => {

        const {categories, activeCategory} = props;
    
        return (
            <>
            { categories.map((category, index) => (
                <CategoryButton 
                    key={index}
                    category={category} 
                    activeCategory={activeCategory}
                    onPress={() => handleCategoryButtonPress(category)}
                />
            ))}
            <View style={{height: 80, width: 150}}></View>
            </>
        );
    }

    return (
        <>
            <View style={styles.inventoryItems}>
                <ScrollView style={{flex: 1, padding: 16 }}>
                    <View style={styles.inventoryItemsScrollViewWrapper}>
                        <InventoryItems items={products} onPress={this.handleItemPress} />
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
                    <CategoriesList categories={categories} activeCategory={activeCategory} />
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
                    { invoiceItems.map( (item, index) => (
                        <CheckoutLineItem key={index} itemTitle={item.title} itemPrice={item.price} itemQuantity={item.quantity}/>
                    ))}
                </ScrollView>
                <CheckoutButton ammount={this.checkoutAmmount()}/>
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

