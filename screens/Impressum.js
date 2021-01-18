import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Impressum = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Impressum</Text>
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

export default Impressum;
