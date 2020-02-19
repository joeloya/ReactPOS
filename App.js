import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from "./components/NavBar";
import ScreenRouter from "./components/ScreenRouter";

const App = () => {
  console.log("App render");
  return (
      <View style={styles.appContainer}>
        <NavBar />
        <ScreenRouter screen="sales" />
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    flexDirection:'column',
  },
})