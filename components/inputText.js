import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../styles/colors";

const CustomInputField = ({
  text,
  holdertext,
  changeTextHandler,
  secureText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={holdertext}
        placeholderTextColor={COLORS.secondaryColor}
        onChangeText={(text) => changeTextHandler(text)}
        secureTextEntry={secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    color: COLORS.primaryColor,
    marginBottom: 5,
  },
  input: {
    color: COLORS.primaryColor,
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 25,
    paddingLeft: 25,
    fontSize: 14,
    borderRadius: 5,
  },
});

export default CustomInputField;
