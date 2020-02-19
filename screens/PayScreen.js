import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";

const PayScreen = (props) => {
    return (
        <View style={{flexGrow: 1}}>
            <View style={{flexBasis: 35, alignItems: 'flex-end', flexDirection: 'row', paddingBottom: 5}}>
                <View style={{width: 150, marginRight: 20}}>
                    <Text style={{fontSize:20, color: 'grey'}}>Due </Text>
                </View>
                <View>
                    <Text style={{fontSize:20, fontWeight: 'bold'}}>Cash </Text>
                </View>     
            </View>
            <View style={{flexGrow: 1, flexDirection: 'row'}}> 
                <View style={{flexGrow: 1}}>
                    <PayCustomAmountScreen onPress={props.onPress} total={props.total} />
                </View>
                <View  style={{flexGrow: 1.15, alignItems: 'flex-end'}}>
                    <PayQuickScreen onPress={props.onPress} total={props.total}  />
                </View>
            </View>
            <View style={{flexBasis: 120, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                <View>
                    <TouchableOpacity  onPress={props.onPress} style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>CANCEL</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity  onPress={props.onPress} style={styles.payButton}>
                        <Text style={styles.payButtonText}>PAY</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const PayCustomAmountScreen = (props) => {
    return (
        <>
        <View style={{flex: 1,justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.balanceDisplay}>
                    <Text style={styles.balanceDisplayText}>-${props.total}</Text>
                </View>
                <View style={styles.numberPadDisplay}>
                    <Text style={styles.numberPadDisplayText}>$ 0.00</Text>
                </View>
            </View>

            <View style={styles.numberPadRow}>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>7</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>8</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>9</Text>
                </View>
            </View>

            <View style={styles.numberPadRow}>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>4</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>5</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>6</Text>
                </View>
            </View>

            <View style={styles.numberPadRow}>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>1</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>2</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>3</Text>
                </View>
            </View>

            <View style={styles.numberPadRow}>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>0</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>.</Text>
                </View>
                <View style={styles.numberPad}>
                    <Text style={styles.numberPadText}>x</Text>
                </View>
            </View>

            <View style={styles.numberPadRow}>
            </View>
        </View>
        </>
    );
}

const PayQuickScreen = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'space-between', marginRight: 5}}>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ {props.total}</Text></View>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ 20</Text></View>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ 50</Text></View>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ 100</Text></View>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ 200</Text></View>
            <View style={styles.quickAction}><Text style={styles.quickActionText}>$ 500</Text></View>
        </View>
    );
}


// DUE
// RECEIVED (SAME) (20, 50, 100, 200) ( 7, 8, 9, 0)
// CASH - DEBIT - CREDIT (TRIPLE CHOICE, ONLY ONE, CASH SELECTED BY DEFAULT) (CUSTOM for NUM KEYPAD)
// COBRAR/FINAZALIR

//(CAMBIO)
// IMPRIMIR RECIBO
// ENVIAR POR CORREO
// ENVIAR POR TELEFONO
// NO THANKS
//(FINALIZAR)

// ALL DONE
// AUTO-CLOSE

export default PayScreen;

const styles = StyleSheet.create({
    numberPad: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        borderWidth:3,
        borderColor: 'rgb(240,203,107)',
        backgroundColor: 'rgba(240,203,107,0.10)'
    },
    numberPadRow: {
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
    },
    numberPadText: {
        fontSize: 18
    },
    balanceDisplay: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 70,
        borderWidth:0.5,
        borderColor: 'grey',
        padding: 10,
        flexBasis: 150,
        marginRight: 20,
    },
    balanceDisplayText:{
        fontSize: 20,
        fontWeight: '400',
        color: 'grey'
    },
    numberPadDisplay: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 70,
        borderWidth:3,
        borderColor: 'rgb(240,203,107)',
        padding: 10
    },
    numberPadDisplayText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    quickAction: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240,203,107)',
        width: 300,
    },
    quickActionText: {
        fontSize: 18,
    },
    payButton: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e62e09',
        marginRight: 5,
        marginTop: 20,
        width: 500,
    },
    payButtonText:{
        color:'#EEEEEE',
        fontSize: 24,
        fontWeight: 'bold'
    },
    cancelButton: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e62e09',
        marginTop: 20,
        width: 320,
        marginRight: 20,
    },
    cancelButtonText:{
        color:'#e62e09',
        fontSize: 24,
        fontWeight: 'bold'
    }
})