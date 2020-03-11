// This screen is not imported by any other screen
// is just for quick reference

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const sampleScreenForModal = (props) => {
  return (
    <>
      <Text>Text Example</Text>
      <View>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
          <Text style={styles.buttonText}>Button Example</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e62e09",
    marginRight: 5,
    marginTop: 20,
    width: 500
  },
  buttonText: {
    color: "#EEEEEE",
    fontSize: 24,
    fontWeight: "bold"
  }
});
export default sampleScreenForModal;
