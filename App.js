/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <View style={{flex:1, flexDirection:'column'}}>
      <NavBar />
      <View style={{flex:1, flexGrow:1, flexDirection: 'row'}}>
        <View style={{flex:1, flexGrow:4, backgroundColor: 'white'}}>
        <Text>ITEMS</Text>
        </View>
        <View style={{flex:1, flexGrow:2, backgroundColor: 'lightgrey'}}>
        <Text>TICKET</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
