import React from "react";
import { View, Text, Button } from "react-native";
import CustomInputField from "../components/inputText";
import styles from "../styles/globalStyle";

const Login = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: "center", alignContent: "center" },
      ]}
    >
      <View style={{ justifyContent: "space-between", marginBottom: 30 }}>
        <View>
          <CustomInputField text="Email" holdertext="example@email.de" />
          <CustomInputField text="Password" holdertext="password" />
        </View>
        <Button
          title="Continue"
          onPress={() => navigation.push("Onboarding")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 30,
        }}
      >
        <Text style={[styles.text, { textAlign: "center" }]}>or</Text>
      </View>
      <View>
        <Button title="Sign Up" onPress={() => navigation.push("SignUp")} />
      </View>
    </View>
  );
};

export default Login;
