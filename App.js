import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./components/styles";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.flex_1,
          styles.bg_white,
          styles.item_center,
          styles.justify_center
        ]}
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
