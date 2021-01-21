import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../styles/colors";

const ApiCard = ({ title, value }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgColor,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          color: COLORS.primaryColor,
          fontSize: 14,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text style={{ color: "#111", fontSize: 14, fontWeight: "bold" }}>
        {value}
      </Text>
    </View>
  );
};

export default ApiCard;
