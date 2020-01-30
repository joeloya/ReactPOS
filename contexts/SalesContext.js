import React, { useState, useEffect, createContext } from "react";

const mockProducts = [
    {title: "T. Maiz 1kg", price: 18.11, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1kg", price: 38.22, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Mantequilla 1kg", price: 38.33, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Maiz 1/2kg", price: 18.50, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "T. Blanca 1/2kg", price: 38.51, imageSource: require("./../assets/tortilla-maiz.jpg")},
    {title: "Totopos", price: 18.01, imageSource: require("./../assets/tortilla-maiz.jpg")},
]
const mockCategories = ['Todos', 'Tortillas', 'Cremeria', 'Abarrotes', 'Carnes', 'Panaderia', 'Cocina']
const mockActiveCategory = 'Tortillas';

export const SalesContext = createContext(0);

export default function SalesContextProvider({children}) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [invoiceItems, setInvoiceItems] = useState([]); 

    const addNewItem = (item) => {

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

    useEffect(() => {
        console.log("use effect llamado");
        setProducts(mockProducts)
        setCategories(mockCategories)
        setActiveCategory(mockActiveCategory)
    },[]);

    const contextProps = {
        products,
        setProducts,
        categories,
        setCategories,
        activeCategory,
        setActiveCategory,
        invoiceItems,
        setInvoiceItems,
        addNewItem,
    }

    return (
    <SalesContext.Provider value={contextProps}>
        {children}
    </SalesContext.Provider>
    );
}