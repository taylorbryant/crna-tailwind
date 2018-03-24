import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as tw from "./components/tailwind";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={[
          tw['flex-1'],
          tw['bg-blue-dark'],
          tw['items-center'],
          tw['justify-center']
        ]}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
