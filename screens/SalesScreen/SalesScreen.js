import React, { useContext, createContext } from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import CheckoutLineItem from "./components/CheckoutLineItem";
import CheckoutButton from "./components/CheckoutButton";
import ProductCard from "./components/ProductCard";
import CategoryButton from "./components/CategoryButton";
import {mockProducts, mockCategories, mockActiveCategory} from "../../test/seed";

const SalesContext = createContext(null);

const SalesScreen = (props) => {
    console.log("Sales Screen render");

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

    const salesScreenAPI = {
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

    // - JSX
    return (
        <SalesContext.Provider value={salesScreenAPI}>
            <View style={styles.productsContainer}>
                <ScrollView style={styles.productsScrollViewWrapper}>
                    <View style={styles.productsListWrapper}>
                        <ProductsView />
                    </View>
                </ScrollView>
                <View style={styles.categoriesContainer}>
                    <ScrollView horizontal contentContainerStyle={{alignItems: 'center'}}>
                        <CategoriesView/>
                    </ScrollView>
                    <View style={styles.categoriesOverlayContainer}>
                        <View style={styles.categoriesOverlay}>
                            <Text style={styles.categoriesOverlayText}>></Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.bill}>
                <InvoiceView />
            </View>
        </SalesContext.Provider>
    );
}

const _ProductsView = (props) => {
    const { products, addNewItem } = useContext(SalesContext);
    console.log("ProductsView render");

    handleButtonPress = (item) => {
        addNewItem(item);
    }

    return (
        <>
            {products.map((item, index) => (
                <ProductCard key={index} itemTitle={item.title} itemImageSource={item.imageSource} onPress={() => handleButtonPress(item)} />
            ))}
        </>
    );
}
const ProductsView = React.memo(_ProductsView, (prev, next) => {console.log('mmm', prev, next)});

const CategoriesView = React.memo((props) => {
    const { categories, activeCategory, setActiveCategory, products, setProducts } = useContext(SalesContext);

    handleCategoryButtonPress = (category) => {

        function getRandom(arr, n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        }

        setActiveCategory(category);

        const numberOfRandomProducts = Math.floor(Math.random() * products.length);
        const randomProducts = getRandom(products, numberOfRandomProducts);
        setProducts(randomProducts);

    }

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
});

const InvoiceView = (props) => {
    const { invoiceItems } = useContext(SalesContext);


    const _invoiceTotal = () => {
        return invoiceItems.reduce((prev,current) => { return prev + (current.price * current.quantity)}, 0).toFixed(2)
    }


    return (
        <>
        <ScrollView style={styles.billLineItems}>
        { invoiceItems.map( (item, index) => (
            <CheckoutLineItem key={index} itemTitle={item.title} itemPrice={item.price} itemQuantity={item.quantity}/>
        ))}
        </ScrollView>
        <CheckoutButton ammount={_invoiceTotal()}/>
        </>
    );
}



export default SalesScreen;

const styles = StyleSheet.create({
    productsContainer: {
        flex:1,
        flexGrow:4,
        backgroundColor: '#EEE',
        flexDirection: 'column',
    },
    productsScrollViewWrapper: {
        flex: 1,
        padding: 16,
    },
    productsListWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoriesContainer: {
        height: 100,
        paddingLeft: 10,
        backgroundColor: 'rgb(32,32,32)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        borderTopWidth: 1, 
        borderTopColor: 'rgb(55,55,55)'
    },
    categoriesOverlayContainer: {
        height: 100,
        right: 0,
        width: 75,
        position: "absolute",
        backgroundColor: 'rgb(32,32,32)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesOverlay: {
        width: '100%', 
        borderLeftWidth: 2,
        borderLeftColor: 'rgb(77,77,77)',
        height: 79, justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesOverlayText: {
        fontSize: 25, 
        color: 'rgb(222,222,222)'
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

