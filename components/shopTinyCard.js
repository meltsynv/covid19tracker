import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../styles/colors";

const ShopTinyCard = ({ imgPath }) => (
  <View style={styles.shopCardWrapper}>
    <View style={styles.shopImageWrapper}>
      <Image source={imgPath} style={styles.shopImage} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  shopImageWrapper: {
    alignSelf: "center",
    width: "100%",
    marginRight: 10,
  },
  shopImage: {
    alignSelf: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
  },
});

export default ShopTinyCard;
