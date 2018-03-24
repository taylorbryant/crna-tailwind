import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "./components/tailwind";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={[
          tailwind['flex-1'],
          tailwind['bg-blue'],
          tailwind['items-center'],
          tailwind['justify-center']
        ]}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
