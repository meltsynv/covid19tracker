import React from "react";
import { View, Text, StatusBar } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";
import { COLORS } from "../styles/colors";

const ErrorMessage = ({ message, description }) => {
  const headerHeight = useHeaderHeight();
  return (
    <View
      style={{
        backgroundColor: "#DF3131",
        position: "absolute",
        top: -headerHeight - StatusBar.currentHeight,
        left: 0,
        width: "100%",
        height: 200,
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
      }}
    >
      <View style={{ width: "80%", marginTop: StatusBar.currentHeight + 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
            color: COLORS.white,
          }}
        >
          {message}
        </Text>
        <Text
          style={{
            color: COLORS.white,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};
export default ErrorMessage;
