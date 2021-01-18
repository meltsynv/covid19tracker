import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Datenschutz = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Datenschutz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Datenschutz;
