import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Gift = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Gift</Text>
      <Button
        title="Go to Notification"
        onPress={() => navigation.navigate("Notification")}
      />
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

export default Gift;
