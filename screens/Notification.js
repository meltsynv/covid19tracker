import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default Notification;
