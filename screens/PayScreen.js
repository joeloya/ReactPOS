import React from "react";
import {Button} from "react-native";

const PayScreen = (props) => {
    return (
        <Button title="PAY" onPress={props.onPress} />
    )
}

export default PayScreen;