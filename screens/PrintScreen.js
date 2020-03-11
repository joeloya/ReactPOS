import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const PrintScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <View>
        <Text style={{ fontSize: 28 }}>Total: {props.total}</Text>
      </View>
      <View style={{ marginTop: 16, marginBottom: 35 }}>
        <Text style={{ fontSize: 38 }}>
          Change: <Text style={{ fontWeight: "bold" }}>{props.change}</Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
          <Text style={styles.buttonText}>PRINT</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={props.onPress} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e62e09",
    marginTop: 20,
    width: 500
  },
  buttonText: {
    color: "#EEEEEE",
    fontSize: 24,
    fontWeight: "bold"
  },
  cancelButton: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e62e09",
    marginTop: 20,
    width: 500
  },
  cancelButtonText: {
    color: "#e62e09",
    fontSize: 24,
    fontWeight: "bold"
  }
});
export default PrintScreen;
