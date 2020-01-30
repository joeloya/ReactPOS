import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavBar from "./components/NavBar";
import ScreenRouter from "./components/ScreenRouter";
import SalesContextProvider from "./contexts/SalesContext";

const App = () => {
  console.log("App render");
  return (
    <SalesContextProvider>
      <View style={styles.appContainer}>
        <NavBar />
        <ScreenRouter screen="sales" />
      </View>
    </SalesContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    flexDirection:'column',
  },
})