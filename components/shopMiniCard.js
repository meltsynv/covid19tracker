import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { COLORS } from "../styles/colors";

const ShopMiniCard = ({ imgPath, creditsNumber, title, done }) => (
  <View style={styles.shopCardWrapper}>
    <View style={styles.shopImageWrapper}>
      <ImageBackground source={imgPath} style={styles.shopImage} />
    </View>
    <View style={styles.shopCoinsWrapper}>
      <Text
        style={{
          color: "#111111",
          fontSize: 12,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: COLORS.primaryColor,
          fontSize: 12,
        }}
      >
        {creditsNumber} Credits
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  shopCardWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: COLORS.bgColor,
    borderWidth: 2,
    borderColor: COLORS.primaryColor,
    width: "auto",
    height: 125,
    borderRadius: 15,
    marginRight: 10,
    overflow: "hidden",
  },
  shopImageWrapper: {
    alignSelf: "center",
    width: "100%",
  },
  shopImage: {
    alignSelf: "center",
    width: "100%",
    height: 75,
  },
  shopCoinsWrapper: {
    padding: 10,
  },
  shopCheckWrapper: {
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7.65,
    elevation: 3,
  },
});

export default ShopMiniCard;
