import React from "react";
import {View, Text, Button} from "react-native";

const PayScreen = (props) => {
    return (
        <View style={{flexGrow: 1}}>
            <View style={{flexBasis: 30, borderWidth:1, borderColor: 'grey'}}>
                <Text>TOTAL {props.total}</Text>
            </View>
            <View style={{flexGrow: 1, flexDirection: 'row', borderWidth: 1, borderColor: 'grey'}}> 
                <View style={{flexGrow: 1, backgroundColor: 'lightgrey'}}>
                    <Button title="PAY CUSTOM" onPress={props.onPress} />
                </View>
                <View  style={{flexGrow: 1.15, backgroundColor: 'grey'}}>
                    <Button title="PAY QUICK" onPress={props.onPress} />
                </View>
            </View>
        </View>
    )
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