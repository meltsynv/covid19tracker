import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import CustomInputField from "../components/inputText";
import styles from "../styles/globalStyle";

const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#b3e6ff"
        barStyle="dark-content"
        hidden={false}
      />
      <View style={{ flex: 4, justifyContent: "space-between" }}>
        <View>
          <CustomInputField text="Full Name" holdertext="John Doe" />
          <CustomInputField text="Email" holdertext="example@email.de" />
          <CustomInputField text="Password" holdertext="password" />
          <CustomInputField text="Confirm Password" holdertext="password" />
        </View>
        <Button title="Continue" onPress={() => navigation.navigate("Login")} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[styles.text, { textAlign: "center" }]}>
          By creating an account you agree to our Terms of Service and Privacy
          Policy
        </Text>
      </View>
      <View>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default SignUpPage;
